// Module ID: 14901
// Function ID: 14902
// Name: tokenize
// Dependencies: [14852]

// Module 14901 (tokenize)
import tokenize from "tokenize" /* 14852 */;

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
