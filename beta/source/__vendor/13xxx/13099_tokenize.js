// Module ID: 13099
// Function ID: 13100
// Name: tokenize
// Dependencies: [13050]

// Module 13099 (tokenize)
import tokenize from "tokenize" /* 13050 */;

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
