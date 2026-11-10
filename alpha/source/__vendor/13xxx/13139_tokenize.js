// Module ID: 13139
// Function ID: 13140
// Name: tokenize
// Dependencies: [13064]

// Module 13139 (tokenize)
import tokenize from "tokenize" /* 13064 */;

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
