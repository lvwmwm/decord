// Module ID: 12863
// Function ID: 12864
// Name: tokenize
// Dependencies: [12798]

// Module 12863 (tokenize)
import tokenize from "tokenize" /* 12798 */;

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
