// Module ID: 13130
// Function ID: 13131
// Name: tokenize
// Dependencies: [13081]

// Module 13130 (tokenize)
import tokenize from "tokenize" /* 13081 */;

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
