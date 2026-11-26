// Module ID: 13908
// Function ID: 13909
// Name: tokenize
// Dependencies: [13833]

// Module 13908 (tokenize)
import tokenize from "tokenize" /* 13833 */;

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
