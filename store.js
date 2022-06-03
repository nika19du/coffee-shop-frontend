window.onload=function(){
  // cart box
  const iconShopping= document.querySelector('.iconShopping');
  const cartCloseBtn=document.querySelector('.fa-close');
  const cartBox= document.querySelector('.cartBox');

  iconShopping.addEventListener('click',function(){
    cartBox.classList.add('active');
  });
  cartCloseBtn.addEventListener('click',function(){
    cartBox.classList.remove('active');
  });
 
  // adding data to local storage
  const addToCartBtn=document.getElementsByClassName('addToCart');
  console.log(addToCartBtn);
  let items=[];

  for(let i = 0; i<addToCartBtn.length;i++){
    addToCartBtn[i].addEventListener('click',function (e){
      console.log(e.target.parentElement.children[1].textContent);
      console.log(e.target.parentElement.children[2].children[0].textContent);
      if(typeof Storage !=="undefined"){
        let item={
          id:i+1,
          name:e.target.parentElement.children[1].textContent,
          price:e.target.parentElement.children[2].children[0].textContent,
          no:1
        };
        if(JSON.parse(localStorage.getItem("items"))===null){
          items.push(item);
          localStorage.setItem('items',JSON.stringify(items));
          window.location.reload();
        }else{
          const localItems=JSON.parse(localStorage.getItem('items'));
          localItems.map((data)=>{
            if(item.id==data.id){
              item.no=data.no+1;
              let p=parseInt(data.price);
              item.price=p*item.no;
            }else{
              items.push(data);
            }
          });
          items.push(item);
          localStorage.setItem('items',JSON.stringify(items));
          window.location.reload();
        }
      }else{
        alert("storage is not working on your browser");
      }
    });
  }
  // adding data to shopping cart
  const iconShoppingP= document.querySelector('.iconShopping p');
  let no=0;
  JSON.parse(localStorage.getItem('items')).map(data=>{
    no+=data.no;
  });
  iconShoppingP.innerHTML=no;
  //adding cartbox data in table
  const cardBoxTable=cartBox.querySelector('table');
  let tableData='';
  tableData+='<tr><th>S no.</th><th>Item Name</th><th>Item No</th><th>Item Price</th><th></th></tr>';
    if(JSON.parse(localStorage.getItem("items"))[0]===null){
        tableData+='<tr><td colspan="5">No items found</td></tr>'
    }else{
        JSON.parse(localStorage.getItem("items")).map(data=>{
            tableData+='<tr><th>'+data.id+'</th><th>'+data.name+'</th><th>'+data.no+'</th><th>'+data.price+'</th><th>'+'<a href="#" onclick=Delete(this);>Delete</a></th></tr>';
        }); 
    }
    cardBoxTable.innerHTML=tableData;
}