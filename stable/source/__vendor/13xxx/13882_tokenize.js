// Module ID: 13882
// Function ID: 13883
// Name: tokenize
// Dependencies: [13833]

// Module 13882 (tokenize)
import tokenize from "tokenize" /* 13833 */;

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
