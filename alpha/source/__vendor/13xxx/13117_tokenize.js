// Module ID: 13117
// Function ID: 13118
// Name: tokenize
// Dependencies: [13050]

// Module 13117 (tokenize)
import tokenize from "tokenize" /* 13050 */;

let items;
let obj2;
const LeftParenthesis = tokenize.TYPE.LeftParenthesis;
const RightParenthesis = tokenize.TYPE.RightParenthesis;
const obj = {
  name: "Parentheses",
  structure: obj2,
  parse(call, arg1) {
    const self = this;
    const tokenStart = this.scanner.tokenStart;
    this.eat(LeftParenthesis);
    const callResult = call.call(self, arg1);
    if (!self.scanner.eof) {
      self.eat(RightParenthesis);
    }
    const element = { type: "Parentheses", loc: self.getLocation(tokenStart, self.scanner.tokenStart), children: callResult };
    return element;
  },
  generate(arg0) {
    this.chunk("(");
    this.children(arg0);
    this.chunk(")");
  }
};
obj2 = { children: items };
items = [[]];

export default obj;
