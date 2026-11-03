// Module ID: 13022
// Function ID: 13023
// Name: tokenize
// Dependencies: [12972]

// Module 13022 (tokenize)
import tokenize from "tokenize" /* 12972 */;

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
