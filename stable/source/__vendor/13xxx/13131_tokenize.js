// Module ID: 13131
// Function ID: 13132
// Name: tokenize
// Dependencies: [13082]

// Module 13131 (tokenize)
import tokenize from "tokenize" /* 13082 */;

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
