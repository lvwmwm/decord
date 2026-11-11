// Module ID: 13795
// Function ID: 13796
// Name: tokenize
// Dependencies: [13730]

// Module 13795 (tokenize)
import tokenize from "tokenize" /* 13730 */;

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
