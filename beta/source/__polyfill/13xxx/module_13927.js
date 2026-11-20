// Module ID: 13927
// Function ID: 13928
// Dependencies: []

// Module 13927
let obj2;
const obj = { parse: obj2 };
obj2 = {
  prelude() {
    return this.createSingleNodeList(this.SelectorList());
  },
  block() {
    return this.Block(true);
  }
};

export default obj;
