// Module ID: 14902
// Function ID: 14903
// Name: tokenize
// Dependencies: [14852]

// Module 14902 (tokenize)
import tokenize from "tokenize" /* 14852 */;

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
