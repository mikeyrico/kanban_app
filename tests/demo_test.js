import assert from 'assert';

describe('add', () => {
  it('it should be able to add 1 and 1', () => {
    assert.equal(1+1, 2);
  });
  it('should not equal 4', () => {
    assert.notEqual(1+1, 4);
  });
});
