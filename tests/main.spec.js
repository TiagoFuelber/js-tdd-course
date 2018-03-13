import { expect } from 'chai';
import { sum, sub, mult, div } from '../src/main.js';

describe('Calc', () => {

  //smoke tests
  describe('smoke tests', () => {
    it('should exist the method `sum`', () => {
      expect(sum).to.exist;
      expect(sum).to.be.a('function');
    });

    it('should exist the method `sub`', () => {
      expect(sub).to.exist;
      expect(sub).to.be.a('function');
    });

    it('should exist the method `mult`', () => {
      expect(mult).to.exist;
      expect(mult).to.be.a('function');
    });

    it('should exist the method `div`', () => {
      expect(div).to.exist;
      expect(div).to.be.a('function');
    });
  });

  describe('sum', () => {
    it('should return 4 when sum(2, 2)', () => {
      expect(sum(2, 2)).to.be.equal(4);
    });
  });

  describe('sub', () => {
    it('should return 4 when sub(6, 2)', () => {
      expect(sub(6, 2)).to.be.equal(4);
    });

    it('should return -4 when sub(6, 10)', () => {
      expect(sub(6, 10)).to.be.equal(-4);
    });
  });

  describe('mult', () => {
    it('should return 4 when mult(2, 2)', () => {
      expect(mult(2, 2)).to.be.equal(4);
    });
  });

  describe('div', () => {
    it('should return 4 when mult(8, 2)', () => {
      expect(div(8, 2)).to.be.equal(4);
    });

    it('should return `Nâo é possível dividir por 0!`', () => {
      expect(div(8, 0)).to.be.equal('Nâo é possível dividir por 0!');
    });
  });
});
