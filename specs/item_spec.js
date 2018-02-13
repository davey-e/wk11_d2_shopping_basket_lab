const assert = require('assert');
const Item = require('../item.js');

describe('Item', function(){

  beforeEach(function(){
    apple = new Item('Apple');
    orange = new Item('Orange');
  });

  it('should have a name', function(){
    const actual = apple.name;
    assert.strictEqual(actual, 'Apple');
  });
});
