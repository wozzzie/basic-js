const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  length: 0,
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    if (value === undefined) this.chain.push(`'(  )'`);

    this.chain.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    const invalidPos =
      typeof position != "number" ||
      position > this.chain.length ||
      position < 1;

    if (invalidPos) {
      this.chain.length = 0;
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chain.splice(position - 1, 1);
    }
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let targetChain = this.chain.join("~~");
    this.chain.length = 0;
    this.chain = [];
    return targetChain;
  },
};

module.exports = {
  chainMaker,
};
