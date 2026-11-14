// Module ID: 13881
// Function ID: 13882
// Name: tokenize
// Dependencies: [13831]

// Module 13881 (tokenize)
import tokenize from "tokenize" /* 13831 */;

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
