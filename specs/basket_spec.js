const assert = require('assert');
const Basket = require('../basket.js');
const Item = require('../item.js');

describe('Basket', function(){

  beforeEach(function(){
    apple = new Item('Apple',1, true);
    orange = new Item('Orange',1, false);
    steak = new Item('Steak', 19, false);
    basket = new Basket();
  });

  it('should have a collection of items', function(){
    const actual = basket.items;
    assert.deepStrictEqual(actual, []);
  });
  it('should be able to add items', function(){
    basket.addItem(apple);
    basket.addItem(orange);
    const actual = basket.items;
    assert.deepStrictEqual(actual, [apple, orange]);
  });
  it('should be able to remove items', function(){
    basket.addItem(apple);
    basket.addItem(orange);
    basket.removeItem(orange);
    const actual = basket.items;
    assert.deepStrictEqual(actual, [apple]);
  });
  it('should be able to calculate basket total', function(){
    basket.addItem(apple);
    basket.addItem(orange);
    basket.addItem(steak);
    const actual = basket.total();
    assert.strictEqual(actual, 21);
  })

});
