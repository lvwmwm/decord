// Module ID: 13031
// Function ID: 13032
// Name: tokenize
// Dependencies: [12972]

// Module 13031 (tokenize)
import tokenize from "tokenize" /* 12972 */;

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
