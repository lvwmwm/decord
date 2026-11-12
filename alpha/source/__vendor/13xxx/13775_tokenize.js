// Module ID: 13775
// Function ID: 13776
// Name: tokenize
// Dependencies: [13726]

// Module 13775 (tokenize)
import tokenize from "tokenize" /* 13726 */;

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
