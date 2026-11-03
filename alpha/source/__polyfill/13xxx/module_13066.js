// Module ID: 13066
// Function ID: 13067
// Dependencies: []

// Module 13066
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
