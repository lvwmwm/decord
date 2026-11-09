// Module ID: 13100
// Function ID: 13101
// Name: tokenize
// Dependencies: [13050]

// Module 13100 (tokenize)
import tokenize from "tokenize" /* 13050 */;

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
