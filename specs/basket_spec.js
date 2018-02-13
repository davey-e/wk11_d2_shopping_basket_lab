const assert = require('assert');
const Basket = require('../basket.js');
const Item = require('../item.js');

describe('Basket', function(){

  beforeEach(function(){
    apple = new Item('Apple',1, true);
    orange = new Item('Orange',1, false);
    basket = new Basket();
  });

  it('should have a collection of items', function(){
    const actual = basket.items;
    assert.deepStrictEqual(actual, []);
  });

});
