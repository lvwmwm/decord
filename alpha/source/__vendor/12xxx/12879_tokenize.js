// Module ID: 12879
// Function ID: 12880
// Name: tokenize
// Dependencies: [12798]

// Module 12879 (tokenize)
import tokenize from "tokenize" /* 12798 */;

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
