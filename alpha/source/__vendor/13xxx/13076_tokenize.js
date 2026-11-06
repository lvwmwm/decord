// Module ID: 13076
// Function ID: 13077
// Name: tokenize
// Dependencies: [13027]

// Module 13076 (tokenize)
import tokenize from "tokenize" /* 13027 */;

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
