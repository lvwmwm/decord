// Module ID: 13132
// Function ID: 13133
// Name: tokenize
// Dependencies: [13082]

// Module 13132 (tokenize)
import tokenize from "tokenize" /* 13082 */;

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
