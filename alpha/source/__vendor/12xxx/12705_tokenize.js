// Module ID: 12705
// Function ID: 12706
// Name: tokenize
// Dependencies: [12657]

// Module 12705 (tokenize)
import tokenize from "tokenize" /* 12657 */;

let items;
let obj2;
const LeftSquareBracket = tokenize.TYPE.LeftSquareBracket;
const RightSquareBracket = tokenize.TYPE.RightSquareBracket;
const obj = {
  name: "Brackets",
  structure: obj2,
  parse(call, arg1) {
    const self = this;
    const tokenStart = this.scanner.tokenStart;
    this.eat(LeftSquareBracket);
    const callResult = call.call(self, arg1);
    if (!self.scanner.eof) {
      self.eat(RightSquareBracket);
    }
    const element = { type: "Brackets", loc: self.getLocation(tokenStart, self.scanner.tokenStart), children: callResult };
    return element;
  },
  generate(arg0) {
    this.chunk("[");
    this.children(arg0);
    this.chunk("]");
  }
};
obj2 = { children: items };
items = [[]];

export default obj;
