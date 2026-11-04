// Module ID: 13103
// Function ID: 13104
// Name: tokenize
// Dependencies: [13054]

// Module 13103 (tokenize)
import tokenize from "tokenize" /* 13054 */;

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
