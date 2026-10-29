// Module ID: 12732
// Function ID: 12733
// Name: tokenize
// Dependencies: [12657]

// Module 12732 (tokenize)
import tokenize from "tokenize" /* 12657 */;

let obj2;
const String = tokenize.TYPE.String;
let obj = {
  name: "String",
  structure: obj2,
  parse() {
    const obj = { type: "String", loc: this.getLocation(this.scanner.tokenStart, this.scanner.tokenEnd), value: this.consume(String) };
    return obj;
  },
  generate(value) {
    this.chunk(value.value);
  }
};
obj2 = { value: String };

export default obj;
