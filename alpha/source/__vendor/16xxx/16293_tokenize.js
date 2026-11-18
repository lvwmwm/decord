// Module ID: 16293
// Function ID: 16294
// Name: tokenize
// Dependencies: [16244]

// Module 16293 (tokenize)
import tokenize from "tokenize" /* 16244 */;

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
