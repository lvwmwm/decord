// Module ID: 12885
// Function ID: 12886
// Name: tokenize
// Dependencies: [12836]

// Module 12885 (tokenize)
import tokenize from "tokenize" /* 12836 */;

const CDC = tokenize.TYPE.CDC;
let obj = {
  name: "CDC",
  structure: [],
  parse() {
    const tokenStart = this.scanner.tokenStart;
    this.eat(CDC);
    const obj = { type: "CDC", loc: this.getLocation(tokenStart, this.scanner.tokenStart) };
    return obj;
  },
  generate() {
    this.chunk("-->");
  }
};

export default obj;
