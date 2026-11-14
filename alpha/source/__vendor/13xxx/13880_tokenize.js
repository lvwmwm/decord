// Module ID: 13880
// Function ID: 13881
// Name: tokenize
// Dependencies: [13831]

// Module 13880 (tokenize)
import tokenize from "tokenize" /* 13831 */;

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
