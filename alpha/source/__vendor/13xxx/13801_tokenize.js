// Module ID: 13801
// Function ID: 13802
// Name: tokenize
// Dependencies: [13726]

// Module 13801 (tokenize)
import tokenize from "tokenize" /* 13726 */;

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
