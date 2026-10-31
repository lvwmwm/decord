// Module ID: 12883
// Function ID: 12884
// Name: tokenize
// Dependencies: [12833]

// Module 12883 (tokenize)
import tokenize from "tokenize" /* 12833 */;

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
