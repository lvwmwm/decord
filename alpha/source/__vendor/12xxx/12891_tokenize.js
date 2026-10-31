// Module ID: 12891
// Function ID: 12892
// Name: tokenize
// Dependencies: [12833]

// Module 12891 (tokenize)
import tokenize from "tokenize" /* 12833 */;

let obj2;
const Hash = tokenize.TYPE.Hash;
let obj = {
  name: "Hash",
  structure: obj2,
  parse() {
    let scanner;
    const tokenStart = this.scanner.tokenStart;
    this.eat(Hash);
    const obj = { type: "Hash", loc: this.getLocation(tokenStart, this.scanner.tokenStart), value: scanner.substrToCursor(tokenStart + 1) };
    scanner = this.scanner;
    return obj;
  },
  generate(value) {
    this.chunk("#");
    this.chunk(value.value);
  }
};
obj2 = { value: String };

export default obj;
