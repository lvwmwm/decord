// Module ID: 13104
// Function ID: 13105
// Name: tokenize
// Dependencies: [13055]

// Module 13104 (tokenize)
import tokenize from "tokenize" /* 13055 */;

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
