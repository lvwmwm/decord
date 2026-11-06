// Module ID: 13077
// Function ID: 13078
// Name: tokenize
// Dependencies: [13027]

// Module 13077 (tokenize)
import tokenize from "tokenize" /* 13027 */;

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
