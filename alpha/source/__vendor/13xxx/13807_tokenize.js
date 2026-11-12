// Module ID: 13807
// Function ID: 13808
// Name: tokenize
// Dependencies: [13726]

// Module 13807 (tokenize)
import tokenize from "tokenize" /* 13726 */;

let obj2;
const WhiteSpace = tokenize.TYPE.WhiteSpace;
let closure_1 = Object.freeze({ type: "WhiteSpace", loc: null, value: " " });
const obj = {
  name: "WhiteSpace",
  structure: obj2,
  parse() {
    this.eat(WhiteSpace);
    return closure_1;
  },
  generate(value) {
    this.chunk(value.value);
  }
};
obj2 = { value: String };

export default obj;
