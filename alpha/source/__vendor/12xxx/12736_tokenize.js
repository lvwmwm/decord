// Module ID: 12736
// Function ID: 12737
// Name: tokenize
// Dependencies: [12657]

// Module 12736 (tokenize)
import tokenize from "tokenize" /* 12657 */;

const Function = tokenize.TYPE.Function;
const Url = tokenize.TYPE.Url;
const RightParenthesis = tokenize.TYPE.RightParenthesis;
let obj = {
  name: "Url",
  structure: { value: ["String", "Raw"] },
  parse() {
    let StringResult;
    let str4;
    const self = this;
    const tokenStart = this.scanner.tokenStart;
    const tokenType = this.scanner.tokenType;
    if (Url === tokenType) {
      const sum = tokenStart + 4;
      const diff = self.scanner.tokenEnd - 1;
      let tmp14 = sum;
      if (sum < diff) {
        const source3 = self.scanner.source;
        let tmp18 = sum;
        tmp14 = sum;
        const obj6 = tokenize;
        if (obj6.isWhiteSpace(source3.charCodeAt(sum))) {
          const sum1 = tmp18 + 1;
          tmp14 = sum1;
          while (sum1 < diff) {
            let obj2 = tokenize;
            let source = self.scanner.source;
            tmp18 = sum1;
            tmp14 = sum1;
            if (!obj2.isWhiteSpace(source.charCodeAt(sum1))) {
              break;
            }
          }
        }
      }
      let tmp19 = diff;
      if (tmp14 < diff) {
        const source4 = self.scanner.source;
        let tmp23 = diff;
        tmp19 = diff;
        const obj7 = tokenize;
        if (obj7.isWhiteSpace(source4.charCodeAt(diff - 1))) {
          const diff1 = tmp23 - 1;
          tmp19 = diff1;
          while (tmp14 < diff1) {
            let obj3 = tokenize;
            let source2 = self.scanner.source;
            tmp23 = diff1;
            tmp19 = diff1;
            if (!obj3.isWhiteSpace(source2.charCodeAt(diff1 - 1))) {
              break;
            }
          }
        }
      }
      const obj4 = { type: "Raw", loc: self.getLocation(tmp14, tmp19), value: str4.substring(tmp14, tmp19) };
      str4 = self.scanner.source;
      self.eat(Url);
      StringResult = obj4;
    } else if (Function === tokenType) {
      const obj = tokenize;
      if (!obj.cmpStr(self.scanner.source, self.scanner.tokenStart, self.scanner.tokenEnd, "url(")) {
        self.error("Function name must be `url`");
      }
      self.eat(tmp26);
      const scanner = self.scanner;
      scanner.skipSC();
      StringResult = self.String();
      const scanner2 = self.scanner;
      scanner2.skipSC();
      self.eat(RightParenthesis);
    } else {
      self.error("Url or Function is expected");
    }
    const obj5 = { type: "Url", loc: self.getLocation(tokenStart, self.scanner.tokenStart), value: StringResult };
    return obj5;
  },
  generate(value) {
    this.chunk("url");
    this.chunk("(");
    this.node(value.value);
    this.chunk(")");
  }
};

export default obj;
