// Module ID: 13113
// Function ID: 13114
// Name: tokenize
// Dependencies: [13064]

// Module 13113 (tokenize)
import tokenize from "tokenize" /* 13064 */;

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
