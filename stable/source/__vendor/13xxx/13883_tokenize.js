// Module ID: 13883
// Function ID: 13884
// Name: tokenize
// Dependencies: [13833]

// Module 13883 (tokenize)
import tokenize from "tokenize" /* 13833 */;

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
