// Module ID: 12887
// Function ID: 12888
// Dependencies: [12833, 12877, 12862]

// Module 12887
import tokenize from "tokenize" /* 12833 */;
import _mod12862 from "module_12862" /* 12862 */;
import tokenize2 from "tokenize" /* 12877 */;

let items;
let obj2;
function consumeValueRaw(arg0) {
  return this.Raw(arg0, tokenize2.mode.exclamationMarkOrSemicolon, true);
}
function consumeCustomPropertyRaw(arg0) {
  return this.Raw(arg0, tokenize2.mode.exclamationMarkOrSemicolon, false);
}
function consumeValue() {
  const self = this;
  const tokenIndex = this.scanner.tokenIndex;
  const ValueResult = this.Value();
  let tmp2 = "Raw" !== ValueResult.type && false === self.scanner.eof && self.scanner.tokenType !== Semicolon;
  if (tmp2) {
    const scanner = self.scanner;
    tmp2 = false === scanner.isDelim(33);
  }
  if (tmp2) {
    const scanner2 = self.scanner;
    tmp2 = false === scanner2.isBalanceEdge(tokenIndex);
  }
  if (tmp2) {
    self.error();
  }
  return ValueResult;
}
function readProperty() {
  const self = this;
  const tokenStart = this.scanner.tokenStart;
  if (this.scanner.tokenType === Delim) {
    const source = self.scanner.source;
    const charCodeAtResult = source.charCodeAt(self.scanner.tokenStart);
    if (42 !== charCodeAtResult) {
      if (36 !== charCodeAtResult) {
        if (43 !== charCodeAtResult) {
          if (35 !== charCodeAtResult) {
            if (38 !== charCodeAtResult) {
              if (47 === charCodeAtResult) {
                const iter = self.scanner;
                iter.next();
                const scanner = self.scanner;
                if (scanner.isDelim(47)) {
                  const iter2 = self.scanner;
                  iter2.next();
                }
              }
            }
          }
        }
      }
    }
    const iter3 = self.scanner;
    iter3.next();
  }
  if (self.scanner.tokenType === Hash) {
    self.eat(tmp4);
  } else {
    self.eat(Ident);
  }
  const scanner2 = self.scanner;
  return scanner2.substrToCursor(tokenStart);
}
function getImportant() {
  this.eat(Delim);
  const scanner = this.scanner;
  scanner.skipSC();
  const consumeResult = this.consume(Ident);
  return "important" === consumeResult || consumeResult;
}
const Ident = tokenize.TYPE.Ident;
const Hash = tokenize.TYPE.Hash;
const Colon = tokenize.TYPE.Colon;
const Semicolon = tokenize.TYPE.Semicolon;
const Delim = tokenize.TYPE.Delim;
const WhiteSpace = tokenize.TYPE.WhiteSpace;
let obj = {
  name: "Declaration",
  structure: obj2,
  parse() {
    let element;
    const self = this;
    const tokenStart = this.scanner.tokenStart;
    const tokenIndex = this.scanner.tokenIndex;
    const callResult = readProperty.call(self);
    const obj = _mod12862;
    const isCustomPropertyResult = obj.isCustomProperty(callResult);
    const obj2 = isCustomPropertyResult ? consumeCustomPropertyRaw : consumeValueRaw;
    const scanner = self.scanner;
    const tmp3 = isCustomPropertyResult ? self.parseCustomProperty : self.parseValue;
    scanner.skipSC();
    self.eat(Colon);
    const tokenIndex2 = self.scanner.tokenIndex;
    if (!isCustomPropertyResult) {
      const scanner2 = self.scanner;
      scanner2.skipSC();
    }
    if (tmp3) {
      element = self.parseWithFallback(consumeValue, obj2);
    } else {
      element = obj2.call(self, self.scanner.tokenIndex);
    }
    if (isCustomPropertyResult) {
      if ("Value" === element.type) {
        const children = element.children;
        if (children.isEmpty()) {
          let diff = tokenIndex2 - self.scanner.tokenIndex;
          if (diff <= 0) {
            const scanner3 = self.scanner;
            while (scanner3.lookupType(diff) !== WhiteSpace) {
              diff = diff + 1;
            }
            const children2 = element.children;
            children2.appendData({ type: "WhiteSpace", loc: null, value: " " });
          }
        }
      }
    }
    const scanner4 = self.scanner;
    let flag = false;
    if (scanner4.isDelim(33)) {
      const scanner5 = self.scanner;
      const callResult1 = getImportant.call(self);
      scanner5.skipSC();
      flag = callResult1;
    }
    let tmp14 = false === self.scanner.eof && self.scanner.tokenType !== Semicolon;
    if (tmp14) {
      const scanner6 = self.scanner;
      tmp14 = false === scanner6.isBalanceEdge(tokenIndex);
    }
    if (tmp14) {
      self.error();
    }
    const obj3 = { type: "Declaration", loc: self.getLocation(tokenStart, self.scanner.tokenStart), important: flag, property: callResult, value: element };
    return obj3;
  },
  generate(property) {
    const self = this;
    this.chunk(property.property);
    this.chunk(":");
    this.node(property.value);
    if (property.important) {
      let str = "!important";
      const chunk = self.chunk;
      if (true !== property.important) {
        str = `!${property.important}`;
      }
      chunk(str);
    }
  },
  walkContext: "declaration"
};
obj2 = { important: items, property: String, value: ["Value", "Raw"] };
items = [Boolean, String];

export default obj;
