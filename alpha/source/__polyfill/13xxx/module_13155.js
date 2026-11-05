// Module ID: 13155
// Function ID: 13156
// Dependencies: []

// Module 13155
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
