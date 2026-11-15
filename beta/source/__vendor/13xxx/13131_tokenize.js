// Module ID: 13131
// Function ID: 13132
// Name: tokenize
// Dependencies: [13081]

// Module 13131 (tokenize)
import tokenize from "tokenize" /* 13081 */;

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
