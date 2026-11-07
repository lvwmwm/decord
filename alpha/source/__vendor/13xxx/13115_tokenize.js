// Module ID: 13115
// Function ID: 13116
// Name: tokenize
// Dependencies: [13050]

// Module 13115 (tokenize)
import tokenize from "tokenize" /* 13050 */;

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
