// Module ID: 13111
// Function ID: 13112
// Name: tokenize
// Dependencies: [13062]

// Module 13111 (tokenize)
import tokenize from "tokenize" /* 13062 */;

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
