// Module ID: 12917
// Function ID: 12918
// Name: tokenize
// Dependencies: [12836]

// Module 12917 (tokenize)
import tokenize from "tokenize" /* 12836 */;

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
