// Module ID: 13021
// Function ID: 13022
// Name: tokenize
// Dependencies: [12972]

// Module 13021 (tokenize)
import tokenize from "tokenize" /* 12972 */;

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
