// Module ID: 12843
// Function ID: 12844
// Name: tokenize
// Dependencies: [12798]

// Module 12843 (tokenize)
import tokenize from "tokenize" /* 12798 */;

let items;
let obj2;
const Semicolon = tokenize.TYPE.Semicolon;
const LeftCurlyBracket = tokenize.TYPE.LeftCurlyBracket;
const obj = {
  name: "AtrulePrelude",
  structure: obj2,
  parse(keys) {
    let formatted = keys;
    if (null !== keys) {
      formatted = keys.toLowerCase();
    }
    const self = this;
    const scanner = this.scanner;
    scanner.skipSC();
    const atrule = this.atrule;
    if (atrule.hasOwnProperty(formatted)) {
      let callResult;
      if (typeof self.atrule[formatted].prelude === "function") {
        const prelude = self.atrule[formatted].prelude;
        callResult = prelude.call(self);
      }
      const scanner2 = self.scanner;
      scanner2.skipSC();
      const tmp5 = true !== self.scanner.eof && self.scanner.tokenType !== LeftCurlyBracket && self.scanner.tokenType !== Semicolon;
      if (tmp5) {
        self.error("Semicolon or block is expected");
      }
      if (null === callResult) {
        callResult = self.createList();
      }
      const element = { type: "AtrulePrelude", loc: self.getLocationFromList(callResult), children: callResult };
      return element;
    }
    callResult = self.readSequence(self.scope.AtrulePrelude);
  },
  generate(arg0) {
    this.children(arg0);
  },
  walkContext: "atrulePrelude"
};
obj2 = { children: items };
items = [[]];

export default obj;
