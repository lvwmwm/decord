// Module ID: 13105
// Function ID: 13106
// Name: tokenize
// Dependencies: [13055]

// Module 13105 (tokenize)
import tokenize from "tokenize" /* 13055 */;

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
