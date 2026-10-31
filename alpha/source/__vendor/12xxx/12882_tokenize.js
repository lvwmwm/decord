// Module ID: 12882
// Function ID: 12883
// Name: tokenize
// Dependencies: [12833]

// Module 12882 (tokenize)
import tokenize from "tokenize" /* 12833 */;

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
