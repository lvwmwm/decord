// Module ID: 12880
// Function ID: 12881
// Dependencies: [12833, 12877]

// Module 12880
import tokenize from "tokenize" /* 12833 */;
import tokenize2 from "tokenize" /* 12877 */;

let items;
let obj2;
function consumeRaw(arg0) {
  return this.Raw(arg0, null, true);
}
function consumeRule() {
  return this.parseWithFallback(this.Rule, consumeRaw);
}
function consumeRawDeclaration(arg0) {
  return this.Raw(arg0, tokenize2.mode.semicolonIncluded, true);
}
function consumeDeclaration() {
  const self = this;
  if (this.scanner.tokenType === Semicolon) {
    return consumeRawDeclaration.call(self, self.scanner.tokenIndex);
  } else {
    const parseWithFallbackResult = self.parseWithFallback(self.Declaration, consumeRawDeclaration);
    if (self.scanner.tokenType === tmp) {
      const iter = self.scanner;
      iter.next();
    }
    return parseWithFallbackResult;
  }
}
const WhiteSpace = tokenize.TYPE.WhiteSpace;
const Comment = tokenize.TYPE.Comment;
const Semicolon = tokenize.TYPE.Semicolon;
const AtKeyword = tokenize.TYPE.AtKeyword;
const LeftCurlyBracket = tokenize.TYPE.LeftCurlyBracket;
const RightCurlyBracket = tokenize.TYPE.RightCurlyBracket;
let obj = {
  name: "Block",
  structure: obj2,
  parse(arg0) {
    const self = this;
    const tokenStart = this.scanner.tokenStart;
    const obj = arg0 ? consumeDeclaration : consumeRule;
    const list = this.createList();
    this.eat(LeftCurlyBracket);
    if (!this.scanner.eof) {
      const tokenType = self.scanner.tokenType;
      while (RightCurlyBracket !== tokenType) {
        if (WhiteSpace !== tokenType) {
          if (Comment !== tokenType) {
            if (AtKeyword === tokenType) {
              let arr = list.push(self.parseWithFallback(self.Atrule, consumeRaw));
            } else {
              let arr3 = list.push(obj.call(self));
            }
          }
          if (self.scanner.eof) {
            break;
          }
        }
        let iter = self.scanner;
        let nextResult = iter.next();
      }
    }
    if (!self.scanner.eof) {
      self.eat(RightCurlyBracket);
    }
    const element = { type: "Block", loc: self.getLocation(tokenStart, self.scanner.tokenStart), children: list };
    return element;
  },
  generate(arg0) {
    this.chunk("{");
    this.children(arg0, function(type) {
      if ("Declaration" === type.type) {
        const self = this;
        this.chunk(";");
      }
    });
    this.chunk("}");
  },
  walkContext: "block"
};
obj2 = { children: items };
items = [["Atrule", "Rule", "Declaration"]];

export default obj;
