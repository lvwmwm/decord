// Module ID: 16294
// Function ID: 16295
// Name: tokenize
// Dependencies: [16244]

// Module 16294 (tokenize)
import tokenize from "tokenize" /* 16244 */;

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
