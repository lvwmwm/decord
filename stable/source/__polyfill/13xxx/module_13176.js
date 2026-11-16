// Module ID: 13176
// Function ID: 13177
// Dependencies: []

// Module 13176
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
