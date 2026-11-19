// Module ID: 16285
// Function ID: 16286
// Name: tokenize
// Dependencies: [16235]

// Module 16285 (tokenize)
import tokenize from "tokenize" /* 16235 */;

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
