// Module ID: 13158
// Function ID: 13159
// Dependencies: []

// Module 13158
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
