// Module ID: 13148
// Function ID: 13149
// Dependencies: []

// Module 13148
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
