// Module ID: 12856
// Function ID: 12857
// Name: tokenize
// Dependencies: [12798]

// Module 12856 (tokenize)
import tokenize from "tokenize" /* 12798 */;

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
