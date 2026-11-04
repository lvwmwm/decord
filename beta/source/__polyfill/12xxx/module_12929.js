// Module ID: 12929
// Function ID: 12930
// Dependencies: []

// Module 12929
let obj2;
const obj = { parse: obj2 };
obj2 = {
  prelude() {
    return this.createSingleNodeList(this.MediaQueryList());
  },
  block() {
    return this.Block(false);
  }
};

export default obj;
