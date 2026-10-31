// Module ID: 12890
// Function ID: 12891
// Name: tokenize
// Dependencies: [12833]

// Module 12890 (tokenize)
import tokenize from "tokenize" /* 12833 */;

let items;
let obj2;
const RightParenthesis = tokenize.TYPE.RightParenthesis;
let obj = {
  name: "Function",
  structure: obj2,
  parse(call, arg1) {
    let callResult;
    const self = this;
    const tokenStart = this.scanner.tokenStart;
    const str = this.consumeFunctionName();
    const formatted = str.toLowerCase();
    if (arg1.hasOwnProperty(formatted)) {
      const obj = arg1[formatted];
      callResult = obj.call(self, arg1);
    } else {
      callResult = call.call(self, arg1);
    }
    if (!self.scanner.eof) {
      self.eat(RightParenthesis);
    }
    const element = { type: "Function", loc: self.getLocation(tokenStart, self.scanner.tokenStart), name: str, children: callResult };
    return element;
  },
  generate(name) {
    this.chunk(name.name);
    this.chunk("(");
    this.children(name);
    this.chunk(")");
  },
  walkContext: "function"
};
obj2 = { name: String, children: items };
items = [[]];

export default obj;
