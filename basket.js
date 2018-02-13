const Basket = function(){
  this.items = [];
}

Basket.prototype.addItem = function(item){
  this.items.push(item);
}

Basket.prototype.removeItem = function(item){
  var index = this.items.indexOf(item);
  this.items.splice(index, 1);
}

module.exports = Basket;
