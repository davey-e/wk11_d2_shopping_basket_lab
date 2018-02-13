const assert = require('assert');
const Item = require('../item.js');

describe('Item', function(){

  beforeEach(function(){
    apple = new Item('Apple', 1);
    orange = new Item('Orange', 1);
  });

  it('should have a name', function(){
    const actual = apple.name;
    assert.strictEqual(actual, 'Apple');
  });
  it('should have a price', function(){
    const actual = orange.price;
    assert.equal(actual, 1);
  });
});
