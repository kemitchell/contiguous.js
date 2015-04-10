var expect = require('chai').expect;
var contiguous = require('..');

var isX = function(value) {
  return value === 'x';
};

describe('conspicuous', function() {
  it('returns true with contiguous matching values', function() {
    expect(contiguous(['x', 'x'], isX))
      .to.be.true;
  });

  it('returns false with no contiguous matching values', function() {
    expect(contiguous(['x', 'y'], isX))
      .to.be.false;
  });

  it('returns true for an empty array', function() {
    expect(contiguous([], isX))
      .to.be.false;
  });

  it('returns true for an array of one element', function() {
    expect(contiguous(['x'], isX))
      .to.be.false;
  });

  it('returns true for an array of one element', function() {
    expect(contiguous(['y'], isX))
      .to.be.false;
  });
});
