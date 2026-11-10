// Module ID: 12886
// Function ID: 12887
// Name: tokenize
// Dependencies: [12836]

// Module 12886 (tokenize)
import tokenize from "tokenize" /* 12836 */;

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
