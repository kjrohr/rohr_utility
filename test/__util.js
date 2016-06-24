const util = require('../lib/util.js');
const expect = require('chai').expect;

describe('Is this a string?', () => {
  it('Is this a string', (done) => {
    expect(util.output).to.not.equal(null);
    done();
  });
});
