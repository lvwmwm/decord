// Module ID: 13146
// Function ID: 13147
// Name: tokenize
// Dependencies: [13081]

// Module 13146 (tokenize)
import tokenize from "tokenize" /* 13081 */;

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
