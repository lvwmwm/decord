// Module ID: 14933
// Function ID: 14934
// Name: tokenize
// Dependencies: [14852]

// Module 14933 (tokenize)
import tokenize from "tokenize" /* 14852 */;

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
