// Module ID: 12876
// Function ID: 12877
// Dependencies: [12833, 12877]

// Module 12876
import tokenize from "tokenize" /* 12833 */;
import tokenize2 from "tokenize" /* 12877 */;

let obj2;
function consumeRaw(arg0) {
  return this.Raw(arg0, tokenize2.mode.leftCurlyBracketOrSemicolon, true);
}
function isDeclarationBlockAtrule() {
  const scanner = this.scanner;
  let lookupTypeResult = scanner.lookupType(1);
  let num = 1;
  if (lookupTypeResult) {
    while (lookupTypeResult !== RightCurlyBracket) {
      if (lookupTypeResult !== LeftCurlyBracket) {
        if (lookupTypeResult !== AtKeyword) {
          let sum = num + 1;
          let scanner2 = this.scanner;
          lookupTypeResult = scanner2.lookupType(sum);
          num = sum;
        }
      }
      let flag = false;
      return false;
    }
    return true;
  }
  return false;
}
const AtKeyword = tokenize.TYPE.AtKeyword;
const Semicolon = tokenize.TYPE.Semicolon;
const LeftCurlyBracket = tokenize.TYPE.LeftCurlyBracket;
const RightCurlyBracket = tokenize.TYPE.RightCurlyBracket;
let obj = {
  name: "Atrule",
  structure: obj2,
  parse() {
    let AtrulePrelude;
    let parseWithFallback;
    let tmp13;
    const self = this;
    const tokenStart = this.scanner.tokenStart;
    this.eat(AtKeyword);
    const scanner = this.scanner;
    const str = scanner.substrToCursor(tokenStart + 1);
    const formatted = str.toLowerCase();
    const scanner2 = this.scanner;
    scanner2.skipSC();
    let tmp7 = null;
    const tmp4 = false === this.scanner.eof && self.scanner.tokenType !== LeftCurlyBracket && self.scanner.tokenType !== Semicolon;
    if (tmp4) {
      let callResult;
      if (self.parseAtrulePrelude) {
        ({ AtrulePrelude, parseWithFallback } = self);
        const element = parseWithFallback(AtrulePrelude.bind(self, str), consumeRaw);
        callResult = element;
        const tmp10 = "AtrulePrelude" === element.type && null === element.children.head;
        if (tmp10) {
          callResult = null;
        }
      } else {
        callResult = consumeRaw.call(self, self.scanner.tokenIndex);
      }
      const scanner3 = self.scanner;
      scanner3.skipSC();
      tmp7 = callResult;
    }
    const tokenType = self.scanner.tokenType;
    if (Semicolon === tokenType) {
      const iter = self.scanner;
      iter.next();
      tmp13 = null;
    } else {
      tmp13 = null;
      if (LeftCurlyBracket === tokenType) {
        const atrule = self.atrule;
        if (atrule.hasOwnProperty(formatted)) {
          let callResult1;
          if (typeof self.atrule[formatted].block === "function") {
            const block = self.atrule[formatted].block;
            callResult1 = block.call(self);
          }
          tmp13 = callResult1;
        }
        callResult1 = self.Block(isDeclarationBlockAtrule.call(self));
      }
    }
    const obj = { type: "Atrule", loc: self.getLocation(tokenStart, self.scanner.tokenStart), name: str, prelude: tmp7, block: tmp13 };
    return obj;
  },
  generate(name) {
    const self = this;
    this.chunk("@");
    this.chunk(name.name);
    if (null !== name.prelude) {
      self.chunk(" ");
      self.node(name.prelude);
    }
    if (name.block) {
      self.node(name.block);
    } else {
      self.chunk(";");
    }
  },
  walkContext: "atrule"
};
obj2 = { name: String, prelude: ["AtrulePrelude", "Raw", null], block: ["Block", null] };

export default obj;
