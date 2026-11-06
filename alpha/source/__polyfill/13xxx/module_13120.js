// Module ID: 13120
// Function ID: 13121
// Dependencies: []

// Module 13120
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
