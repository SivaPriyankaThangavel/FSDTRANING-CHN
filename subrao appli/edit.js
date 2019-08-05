var url_string = window.location.href; 

var url = 
new URL(url_string);

let id=url.searchParams.get('id');

let name=url.searchParams.get('name');

let price=url.searchParams.get('price');

let pidText=document.querySelector('#pid');

let nameText=document.querySelector('#name');

let priceText=document.querySelector('#price');

pidText.setAttribute('value',id)

nameText.setAttribute('value',name);

priceText.setAttribute('value',price) 

document.querySelector('#update').addEventListener('click',function()

{

var pid=pidText.value;

var name=nameText.value;

var price=priceText.value;

let product=products.find(function(product){

return product.pid===pid;

})

product.name=name;

product.price=price;
Console.log(product.pid);
Console.log(product.name);
Console.log(product.price)

renderProducts(products);

}) 
