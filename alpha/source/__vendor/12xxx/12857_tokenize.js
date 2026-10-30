// Module ID: 12857
// Function ID: 12858
// Name: tokenize
// Dependencies: [12798]

// Module 12857 (tokenize)
import tokenize from "tokenize" /* 12798 */;

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
