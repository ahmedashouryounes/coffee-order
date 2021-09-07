var quantity = 0;
var price = 5;

function order(){
  displayQuantity(quantity);
  displayPrice(quantity * price);
}

function inc(){
  quantity ++;
  displayQuantity(quantity);
  displayPrice(0);
}

function dec(){
  quantity --;
  if(quantity == -1)quantity = 0
  displayQuantity(quantity);
  displayPrice(0);
}


function displayQuantity(num){
var p = document.getElementById('quantity');
  p.innerHTML = num;
}

function displayPrice(num){
var p = document.getElementById('price');
  p.innerHTML = "$ " + num;
}



