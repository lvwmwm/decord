// Module ID: 13121
// Function ID: 13122
// Dependencies: []

// Module 13121
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
