// Module ID: 13779
// Function ID: 13780
// Name: tokenize
// Dependencies: [13730]

// Module 13779 (tokenize)
import tokenize from "tokenize" /* 13730 */;

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
