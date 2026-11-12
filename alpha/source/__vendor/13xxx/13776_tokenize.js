// Module ID: 13776
// Function ID: 13777
// Name: tokenize
// Dependencies: [13726]

// Module 13776 (tokenize)
import tokenize from "tokenize" /* 13726 */;

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
