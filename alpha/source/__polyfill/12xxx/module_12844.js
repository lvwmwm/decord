// Module ID: 12844
// Function ID: 12845
// Dependencies: [12798]

// Module 12844
import tokenize from "tokenize" /* 12798 */;

let items;
let items1;
let obj2;
function getAttributeName() {
  let flag;
  let flag2;
  let scanner3;
  const self = this;
  if (this.scanner.eof) {
    self.error("Unexpected end of input");
  }
  const tokenStart = self.scanner.tokenStart;
  const scanner = self.scanner;
  if (scanner.isDelim(42)) {
    self.scanner.next();
    flag = false;
    flag2 = true;
  } else {
    flag = true;
    flag2 = false;
    if (!self.scanner.isDelim(124)) {
      self.eat(Ident);
      flag = true;
      flag2 = false;
    }
  }
  const scanner2 = self.scanner;
  if (scanner2.isDelim(124)) {
    const source = self.scanner.source;
    if (61 !== source.charCodeAt(self.scanner.tokenStart + 1)) {
      const iter2 = self.scanner;
      iter2.next();
      self.eat(Ident);
    } else if (flag2) {
      self.error("Identifier is expected", self.scanner.tokenEnd);
    }
  } else if (flag2) {
    self.error("Vertical line is expected");
  }
  if (flag) {
    flag = self.scanner.tokenType === Colon;
  }
  if (flag) {
    const iter3 = self.scanner;
    iter3.next();
    self.eat(Ident);
  }
  const obj = { type: "Identifier", loc: self.getLocation(tokenStart, self.scanner.tokenStart), name: scanner3.substrToCursor(tokenStart) };
  scanner3 = self.scanner;
  return obj;
}
function getOperator() {
  const self = this;
  const tokenStart = this.scanner.tokenStart;
  const source = this.scanner.source;
  const charCodeAtResult = source.charCodeAt(tokenStart);
  const tmp3 = tmp2 && 126 !== charCodeAtResult && 94 !== charCodeAtResult && 36 !== charCodeAtResult && 42 !== charCodeAtResult && 124 !== charCodeAtResult;
  if (tmp3) {
    self.error("Attribute selector (=, ~=, ^=, $=, *=, |=) is expected");
  }
  const iter = self.scanner;
  iter.next();
  if (61 !== charCodeAtResult) {
    const scanner = self.scanner;
    if (!scanner.isDelim(61)) {
      self.error("Equal sign is expected");
    }
    const iter2 = self.scanner;
    iter2.next();
  }
  const scanner2 = self.scanner;
  return scanner2.substrToCursor(tokenStart);
}
const Ident = tokenize.TYPE.Ident;
const String = tokenize.TYPE.String;
const Colon = tokenize.TYPE.Colon;
const LeftSquareBracket = tokenize.TYPE.LeftSquareBracket;
const RightSquareBracket = tokenize.TYPE.RightSquareBracket;
let obj = {
  name: "AttributeSelector",
  structure: obj2,
  parse() {
    const self = this;
    const tokenStart = this.scanner.tokenStart;
    this.eat(LeftSquareBracket);
    const scanner = this.scanner;
    scanner.skipSC();
    const scanner2 = self.scanner;
    const callResult = getAttributeName.call(self);
    scanner2.skipSC();
    let tmp6 = null;
    let tmp7 = null;
    let tmp8 = null;
    const tmp5 = RightSquareBracket;
    if (self.scanner.tokenType !== RightSquareBracket) {
      let tmp14 = null;
      let tmp15 = null;
      const tmp20 = Ident;
      if (self.scanner.tokenType !== Ident) {
        let StringResult;
        const scanner3 = self.scanner;
        const callResult1 = getOperator.call(self);
        scanner3.skipSC();
        if (self.scanner.tokenType === String) {
          StringResult = self.String();
        } else {
          StringResult = self.Identifier();
        }
        const scanner4 = self.scanner;
        scanner4.skipSC();
        tmp14 = StringResult;
        tmp15 = callResult1;
      }
      let tokenValue = null;
      if (self.scanner.tokenType === tmp20) {
        const scanner5 = self.scanner;
        tokenValue = scanner5.getTokenValue();
        const iter = self.scanner;
        iter.next();
        const scanner6 = self.scanner;
        scanner6.skipSC();
      }
      tmp6 = tokenValue;
      tmp7 = tmp14;
      tmp8 = tmp15;
    }
    self.eat(tmp5);
    const obj = { type: "AttributeSelector", loc: self.getLocation(tokenStart, self.scanner.tokenStart), name: callResult, matcher: tmp8, value: tmp7, flags: tmp6 };
    return obj;
  },
  generate(name) {
    const self = this;
    this.chunk("[");
    this.node(name.name);
    let str = " ";
    let str2 = " ";
    if (null !== name.matcher) {
      self.chunk(name.matcher);
      let tmp4 = str;
      if (null !== name.value) {
        self.node(name.value);
        if ("String" === name.value.type) {
          str = "";
        }
        tmp4 = str;
      }
      str2 = tmp4;
    }
    if (null !== name.flags) {
      self.chunk(str2);
      self.chunk(name.flags);
    }
    self.chunk("]");
  }
};
obj2 = { name: "Identifier", matcher: items, value: ["String", "Identifier", null], flags: items1 };
items = [String, null];
items1 = [String, null];

export default obj;
