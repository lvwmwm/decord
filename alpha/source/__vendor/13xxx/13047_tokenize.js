// Module ID: 13047
// Function ID: 13048
// Name: tokenize
// Dependencies: [12972]

// Module 13047 (tokenize)
import tokenize from "tokenize" /* 12972 */;

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
