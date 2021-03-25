var data = [
{
    "ProductId": 1,
    "ProductName": "Apple I-Pad Mini",
    "Price": 25699,
    "ImageURL": "images/Apple/01.jpg",
},
{
    "ProductId": 2,
    "ProductName": "Apple I-Phone 4s",
    "Price": 28900,
    "ImageURL": "images/Apple/02.jpg"
},
{
    "ProductId": 3,
    "ProductName": "Apple I-Phone 5s",
    "Price": 38269,
    "ImageURL": "images/Apple/03.jpg"
},
  {
    "ProductId": 4,
    "ProductName": "Apple I-Phone 6sPlus",
    "Price": 73999,
    "ImageURL": "images/Apple/04.jpg"
},
{
    "ProductId": 5,
    "ProductName": "BlackBerry Leap",
    "Price": 21325,
    "ImageURL": "images/BB/10.jpg"
},
{ 
	"ProductId": 6,
    "ProductName": "Nokia X Plus",
    "Price": 4980,
    "ImageURL": "images/Nokia/15.jpg"
},
{
    "ProductId": 7,
    "ProductName": "Boom_Head_Phone",
    "Price": 256,
    "ImageURL": "images/accessories/acc12.jpg",
},
{
    "ProductId": 8,
    "ProductName": "I-Phone 4s back_case",
    "Price": 289,
    "ImageURL": "images/accessories/acc2.jpg"
},
{
    "ProductId": 9,
    "ProductName": "Apple I-Phone case_cover",
    "Price": 382,
    "ImageURL": "images/accessories/acc3.jpg"
},
  {
    "ProductId": 10,
    "ProductName": "Head_Phone",
    "Price": 739,
    "ImageURL": "images/accessories/acc13.jpg"
},
{
    "ProductId": 11,
    "ProductName": "BlackBerry cover",
    "Price": 213,
    "ImageURL": "images/accessories/acc5.jpg"
},
{ 
    "ProductId": 12,
    "ProductName": "Nokia back_case",
    "Price": 498,
    "ImageURL": "images/accessories/acc6.jpg"
},
];

/*var accessories = [
{
    "ProductId": 1,
    "ProductName": "Boom_Head_Phone",
    "Price": 256,
    "ImageURL": "images/accessories/acc12.jpg",
},
{
    "ProductId": 2,
    "ProductName": "I-Phone 4s back_case",
    "Price": 289,
    "ImageURL": "images/accessories/acc2.jpg"
},
{
    "ProductId": 3,
    "ProductName": "Apple I-Phone case_cover",
    "Price": 382,
    "ImageURL": "images/accessories/acc3.jpg"
},
  {
    "ProductId": 4,
    "ProductName": "Head_Phone",
    "Price": 739,
    "ImageURL": "images/accessories/acc13.jpg"
},
{
    "ProductId": 5,
    "ProductName": "BlackBerry cover",
    "Price": 213,
    "ImageURL": "images/accessories/acc5.jpg"
},
{ 
    "ProductId": 6,
    "ProductName": "Nokia back_case",
    "Price": 498,
    "ImageURL": "images/accessories/acc6.jpg"
},
];
*/
//to display products
var products = [];
var cartproducts = [];
var count=0;
var qty=0;
var tot = 0;
var rate;
var tot_amt;
const discount=10;
const tax=2;
var pay_amt,tot_amt,dis_amt,tax_amt;
var bank_blnc=100000;
var thershold_value = 80000;
function displayProducts(){
	for(var i=0; i<data.length;i++){
            str = '<div class="col-md-4 col-sm-6 col-xs-12 product">';
            str += '<div><figure><img src="' + data[i].ImageURL + '" />';
            str += '<figcaption class="captiontext">' + data[i].ProductName + '</figcaption></figure>';
            str += '<div class="price" id="t">' + data[i].Price + '</div>';
            str += '<div class="addtocart">';
            str += '<button class="btn btn-primary btnCart" id='+i+' onclick="randomId(this.id)">Add to cart</button>';
            str += '</div></div></div>';
            document.getElementById('products').innerHTML+=str;
            function get(){
    var a = document.getElementById("0");
    console.log(a);
}
    }
   /* for(var j=0; j<accessories.length;j++){
            str_acc = '<div class="col-md-4 col-sm-6 col-xs-12 acc">';
            str_acc += '<div><figure><img src="' + accessories[j].ImageURL + '" />';
            str_acc += '<figcaption>' + accessories[j].ProductName + '</figcaption></figure>';
            str_acc += '<div class="price" id="t">' + accessories[j].Price + '</div>';
            str_acc += '<div class="addtocart">';
            str_acc += '<button class="btn btn-primary btnCart" id= '+j+' onclick="random(this.id)">Add to cart</button>';
            str_acc += '</div></div></div>';
            document.getElementById('phn_accesories').innerHTML+=str_acc;
    }*/
}
function randomId(id){
   var detail = id;
  document.getElementById("cart").innerHTML=++count;
   cart = '<div class="col-md-3 col-sm-6 col-xs-12 ">';
   cart += '<div><figure>';
   cart+='<img src="' +data[detail].ImageURL +'" />';
   cart+='<figcaption>' + data[detail].ProductName + '</figure>';
   cart+='<div class="cart-product-price">'+ data[detail].Price +'</div></div>';
   document.getElementById("cartlist").innerHTML += cart;
/*
detail.push(data[id].ProductId);
console.log(detail.length);
/*var sorted_arr = arr.sort(); 
var results = [];
for (var i = 0; i < arr.length - 1; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
        results.push(sorted_arr[i]);
           }

    
}
*/

/*   document.getElementById('cartlist').innerHTML+=cart; */

   rate = data[detail].Price;
   tot = tot + rate;
   document.getElementById("total").innerHTML = tot;
   if(thershold_value>tot){
    if(tot>50000){
        tot_amt = ((discount/100)*tot);
        document.getElementById("tot_amt").innerHTML = tot_amt.toFixed(2);

        dis_amt = tot - tot_amt;
        
        tax_amt = (dis_amt * (tax/100));
        document.getElementById("tax_amt").innerHTML = tax_amt.toFixed(2);

        pay_amt = dis_amt + tax_amt;
        document.getElementById("pay_amt").innerHTML = pay_amt.toFixed(2);

        
    }
    else{
        tax_amt = (tot * (tax/100));
        document.getElementById("tax_amt").innerHTML = tax_amt.toFixed(2);
        pay_amt = tot + tax_amt;
        
        document.getElementById("pay_amt").innerHTML = pay_amt.toFixed(2);
    }
}

   /*
   document.getElementById("pay_amt").innerHTML = pay_amt;
*/    }




// window.onload = get();
/*function random(id){
    document.getElementById("cart").innerHTML=++count;
    var details = id;
    cart_acc = '<div class="col-md-6 col-sm-6 col-xs-12">';
    cart_acc += '<div><figure>';
    cart_acc+='<img src="' +accessories[details].ImageURL +'" />';
    cart_acc+='</figure>';
    cart_acc+='<div class="cart-product-price">'+ accessories[details].Price +'</div></div>';
    document.getElementById('cartlist').innerHTML+=cart_acc;
  
}
*/
















/*

cart = '<div class="col-md-4 col-sm-6 col-xs-12 product">';
            cart += '<div><figure><img src="' + data[id].ImageURL + '" />';
            cart += '<figcaption>' + data[id].ProductName + '</figcaption></figure>';
            cart += '<div class="price">' + data[id].Price + '</div>';
            
            cart += '</div></div>';
            document.getElementById('cartlist').innerHTML+=cart;*/