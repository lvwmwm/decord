// Module ID: 13104
// Function ID: 13105
// Name: tokenize
// Dependencies: [13054]

// Module 13104 (tokenize)
import tokenize from "tokenize" /* 13054 */;

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
