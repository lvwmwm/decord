// Module ID: 12848
// Function ID: 12849
// Name: tokenize
// Dependencies: [12798]

// Module 12848 (tokenize)
import tokenize from "tokenize" /* 12798 */;

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
