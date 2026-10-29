// Module ID: 12727
// Function ID: 12728
// Name: tokenize
// Dependencies: [12657]

// Module 12727 (tokenize)
import tokenize from "tokenize" /* 12657 */;

let items;
let obj2;
const Ident = tokenize.TYPE.Ident;
const Function = tokenize.TYPE.Function;
const Colon = tokenize.TYPE.Colon;
const RightParenthesis = tokenize.TYPE.RightParenthesis;
let obj = {
  name: "PseudoElementSelector",
  structure: obj2,
  parse() {
    let consumeResult;
    let tmp5;
    const self = this;
    const tokenStart = this.scanner.tokenStart;
    this.eat(Colon);
    this.eat(Colon);
    if (this.scanner.tokenType === Function) {
      let list;
      const str = self.consumeFunctionName();
      const formatted = str.toLowerCase();
      const pseudo = self.pseudo;
      if (pseudo.hasOwnProperty(formatted)) {
        const scanner = self.scanner;
        scanner.skipSC();
        const scanner2 = self.scanner;
        const obj = self.pseudo[formatted];
        const callResult = obj.call(self);
        scanner2.skipSC();
        list = callResult;
      } else {
        list = self.createList();
        list.push(self.Raw(self.scanner.tokenIndex, null, false));
      }
      self.eat(RightParenthesis);
      tmp5 = list;
      consumeResult = str;
    } else {
      consumeResult = self.consume(Ident);
      tmp5 = null;
    }
    const element = { type: "PseudoElementSelector", loc: self.getLocation(tokenStart, self.scanner.tokenStart), name: consumeResult, children: tmp5 };
    return element;
  },
  generate(name) {
    const self = this;
    this.chunk("::");
    this.chunk(name.name);
    if (null !== name.children) {
      self.chunk("(");
      self.children(name);
      self.chunk(")");
    }
  },
  walkContext: "function"
};
obj2 = { name: String, children: items };
items = [["Raw"], null];

export default obj;
