// Module ID: 13114
// Function ID: 13115
// Name: tokenize
// Dependencies: [13064]

// Module 13114 (tokenize)
import tokenize from "tokenize" /* 13064 */;

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
