// Module ID: 16284
// Function ID: 16285
// Name: tokenize
// Dependencies: [16235]

// Module 16284 (tokenize)
import tokenize from "tokenize" /* 16235 */;

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
