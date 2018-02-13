const Basket = function(){
  this.items = [];
}

Basket.prototype.addItem = function(item){
  this.items.push(item);
}

Basket.prototype.removeItem = function(item){
  const index = this.items.indexOf(item);
  this.items.splice(index, 1);
}

Basket.prototype.total = function(){
  let total = 0;
  for(let i = 0; i < this.items.length; i++){
    total += this.items[i].price;
  }
  return total;
}

module.exports = Basket;
