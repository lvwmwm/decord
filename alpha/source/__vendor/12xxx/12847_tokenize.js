// Module ID: 12847
// Function ID: 12848
// Name: tokenize
// Dependencies: [12798]

// Module 12847 (tokenize)
import tokenize from "tokenize" /* 12798 */;

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
