// Module ID: 13112
// Function ID: 13113
// Name: tokenize
// Dependencies: [13062]

// Module 13112 (tokenize)
import tokenize from "tokenize" /* 13062 */;

const CDO = tokenize.TYPE.CDO;
let obj = {
  name: "CDO",
  structure: [],
  parse() {
    const tokenStart = this.scanner.tokenStart;
    this.eat(CDO);
    const obj = { type: "CDO", loc: this.getLocation(tokenStart, this.scanner.tokenStart) };
    return obj;
  },
  generate() {
    this.chunk("<!--");
  }
};

export default obj;
