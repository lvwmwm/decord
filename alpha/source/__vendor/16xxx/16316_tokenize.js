// Module ID: 16316
// Function ID: 16317
// Name: tokenize
// Dependencies: [16235]

// Module 16316 (tokenize)
import tokenize from "tokenize" /* 16235 */;

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
