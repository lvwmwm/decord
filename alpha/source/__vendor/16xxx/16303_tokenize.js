// Module ID: 16303
// Function ID: 16304
// Name: tokenize
// Dependencies: [16244]

// Module 16303 (tokenize)
import tokenize from "tokenize" /* 16244 */;

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
