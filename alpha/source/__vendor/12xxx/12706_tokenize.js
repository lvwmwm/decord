// Module ID: 12706
// Function ID: 12707
// Name: tokenize
// Dependencies: [12657]

// Module 12706 (tokenize)
import tokenize from "tokenize" /* 12657 */;

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
