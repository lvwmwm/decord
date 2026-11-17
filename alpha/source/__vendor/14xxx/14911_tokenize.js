// Module ID: 14911
// Function ID: 14912
// Name: tokenize
// Dependencies: [14852]

// Module 14911 (tokenize)
import tokenize from "tokenize" /* 14852 */;

let obj2;
const Ident = tokenize.TYPE.Ident;
let obj = {
  name: "Identifier",
  structure: obj2,
  parse() {
    const obj = { type: "Identifier", loc: this.getLocation(this.scanner.tokenStart, this.scanner.tokenEnd), name: this.consume(Ident) };
    return obj;
  },
  generate(name) {
    this.chunk(name.name);
  }
};
obj2 = { name: String };

export default obj;
