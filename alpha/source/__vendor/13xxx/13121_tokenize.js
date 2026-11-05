// Module ID: 13121
// Function ID: 13122
// Name: tokenize
// Dependencies: [13062]

// Module 13121 (tokenize)
import tokenize from "tokenize" /* 13062 */;

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
