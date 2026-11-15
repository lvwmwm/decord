// Module ID: 13141
// Function ID: 13142
// Name: tokenize
// Dependencies: [13081]

// Module 13141 (tokenize)
import tokenize from "tokenize" /* 13081 */;

let obj2;
const Hash = tokenize.TYPE.Hash;
let obj = {
  name: "IdSelector",
  structure: obj2,
  parse() {
    let scanner;
    const tokenStart = this.scanner.tokenStart;
    this.eat(Hash);
    const obj = { type: "IdSelector", loc: this.getLocation(tokenStart, this.scanner.tokenStart), name: scanner.substrToCursor(tokenStart + 1) };
    scanner = this.scanner;
    return obj;
  },
  generate(name) {
    this.chunk("#");
    this.chunk(name.name);
  }
};
obj2 = { name: String };

export default obj;
