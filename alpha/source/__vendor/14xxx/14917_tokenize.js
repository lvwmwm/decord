// Module ID: 14917
// Function ID: 14918
// Name: tokenize
// Dependencies: [14852]

// Module 14917 (tokenize)
import tokenize from "tokenize" /* 14852 */;

let obj2;
const Number = tokenize.TYPE.Number;
let obj = {
  name: "Number",
  structure: obj2,
  parse() {
    const obj = { type: "Number", loc: this.getLocation(this.scanner.tokenStart, this.scanner.tokenEnd), value: this.consume(Number) };
    return obj;
  },
  generate(value) {
    this.chunk(value.value);
  }
};
obj2 = { value: String };

export default obj;
