// Module ID: 12707
// Function ID: 12708
// Name: tokenize
// Dependencies: [12657]

// Module 12707 (tokenize)
import tokenize from "tokenize" /* 12657 */;

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
