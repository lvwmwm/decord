// Module ID: 12926
// Function ID: 12927
// Dependencies: []

// Module 12926
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
