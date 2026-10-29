// Module ID: 12699
// Function ID: 12700
// Dependencies: [12657]

// Module 12699
import tokenize from "tokenize" /* 12657 */;

let items;
let items1;
let obj2;
function checkInteger(arg0, arg1) {
  const self = this;
  const sum = this.scanner.tokenStart + arg0;
  const source = this.scanner.source;
  const charCodeAtResult = source.charCodeAt(sum);
  let sum1 = sum;
  const tmp3 = charCodeAtResult !== c7 && charCodeAtResult !== c8;
  if (!tmp3) {
    const tmp6 = arg1;
    if (tmp6) {
      self.error("Number sign is not allowed");
    }
    sum1 = sum + 1;
  }
  if (sum1 < self.scanner.tokenEnd) {
    do {
      let obj = tokenize;
      let source2 = self.scanner.source;
      if (!obj.isDigit(source2.charCodeAt(sum1))) {
        let errorResult1 = self.error("Integer is expected", sum1);
      }
      sum1 = sum1 + 1;
    } while (sum1 < self.scanner.tokenEnd);
  }
}
function checkTokenIsInteger(arg0) {
  return checkInteger.call(this, 0, arg0);
}
function expectCharCode(arg0, c8) {
  const self = this;
  const obj = tokenize;
  if (!obj.cmpChar(this.scanner.source, this.scanner.tokenStart + arg0, c8)) {
    let str = "N is expected";
    if (c9 !== c8) {
      str = "";
      if (c8 === c8) {
        str = "HyphenMinus is expected";
      }
    }
    self.error(str, self.scanner.tokenStart + arg0);
  }
}
function consumeB() {
  let lookupTypeResult;
  let lookupTypeResult1;
  let num2;
  let sum;
  let sum1;
  let text;
  const self = this;
  let tokenType = this.scanner.tokenType;
  let num = 0;
  if (tokenType === WhiteSpace) {
    do {
      let scanner = self.scanner;
      sum = num + 1;
      lookupTypeResult = scanner.lookupType(sum);
      num = sum;
    } while (lookupTypeResult === WhiteSpace);
    num = sum;
    num2 = sum;
    tokenType = lookupTypeResult;
  } else {
    num = 0;
    num2 = 0;
  }
  let tmp6 = Number;
  let num4 = 0;
  let tmp7 = num2;
  if (tokenType !== Number) {
    const scanner7 = self.scanner;
    let tmp10 = c7;
    if (!scanner7.isDelim(c7, num2)) {
      const scanner2 = self.scanner;
      if (!scanner2.isDelim(c8, num2)) {
        return null;
      }
    }
    const scanner3 = self.scanner;
    if (!scanner3.isDelim(tmp10, num2)) {
      tmp10 = c8;
    }
    let tmp11 = num2;
    do {
      let scanner4 = self.scanner;
      sum1 = tmp11 + 1;
      lookupTypeResult1 = scanner4.lookupType(sum1);
      tmp11 = sum1;
    } while (lookupTypeResult1 === WhiteSpace);
    tmp11 = sum1;
    if (lookupTypeResult1 !== Comment) {
      tokenType = lookupTypeResult1;
      num4 = tmp10;
      tmp7 = sum1;
      tmp6 = Number;
      if (lookupTypeResult1 !== Number) {
        const scanner5 = self.scanner;
        scanner5.skip(sum1);
        checkTokenIsInteger.call(self, c10);
        tokenType = lookupTypeResult1;
        num4 = tmp10;
        tmp7 = sum1;
        tmp6 = tmp16;
      }
    }
  }
  if (0 < tmp7) {
    const scanner6 = self.scanner;
    scanner6.skip(tmp7);
  }
  let tmp19 = 0 === num4;
  if (tmp19) {
    const source = self.scanner.source;
    const charCodeAtResult = source.charCodeAt(self.scanner.tokenStart);
    tmp19 = charCodeAtResult !== c7;
    tokenType = charCodeAtResult;
  }
  if (tmp19) {
    tmp19 = tokenType !== c8;
  }
  if (tmp19) {
    self.error("Number sign is expected");
  }
  checkTokenIsInteger.call(self, 0 !== num4);
  if (num4 === c8) {
    text = `-${self.consume(tmp6)}`;
  } else {
    text = self.consume(tmp6);
  }
  return text;
}
const WhiteSpace = tokenize.TYPE.WhiteSpace;
const Comment = tokenize.TYPE.Comment;
const Ident = tokenize.TYPE.Ident;
const Number = tokenize.TYPE.Number;
const Dimension = tokenize.TYPE.Dimension;
let c7 = 43;
let c8 = 45;
let c9 = 110;
let c10 = true;
let obj = {
  name: "AnPlusB",
  structure: obj2,
  parse() {
    let consumeResult;
    let str;
    const self = this;
    const tokenStart = this.scanner.tokenStart;
    if (this.scanner.tokenType === Number) {
      checkTokenIsInteger.call(self, false);
      consumeResult = self.consume(tmp);
      str = null;
    } else {
      if (self.scanner.tokenType === Ident) {
        const obj = tokenize;
        if (obj.cmpChar(self.scanner.source, self.scanner.tokenStart, c8)) {
          expectCharCode.call(self, 1, c9);
          const scanner8 = self.scanner;
          const tokenLength = scanner8.getTokenLength();
          if (2 === tokenLength) {
            const iter10 = self.scanner;
            iter10.next();
            str = "-1";
            consumeResult = consumeB.call(self);
          } else if (3 === tokenLength) {
            expectCharCode.call(self, 2, c8);
            const iter9 = self.scanner;
            iter9.next();
            const scanner10 = self.scanner;
            scanner10.skipSC();
            checkTokenIsInteger.call(self, c10);
            consumeResult = `-${self.consume(tmp)}`;
            str = "-1";
          } else {
            expectCharCode.call(self, 2, c8);
            checkInteger.call(self, 3, c10);
            const iter8 = self.scanner;
            iter8.next();
            const scanner9 = self.scanner;
            consumeResult = scanner9.substrToCursor(tokenStart + 2);
            str = "-1";
          }
        }
      }
      if (self.scanner.tokenType !== Ident) {
        const scanner11 = self.scanner;
        const tmp44 = c7;
        if (scanner11.isDelim(c7)) {
          const scanner = self.scanner;
        }
        if (self.scanner.tokenType === Dimension) {
          const source = self.scanner.source;
          const charCodeAtResult = source.charCodeAt(self.scanner.tokenStart);
          const sum = self.scanner.tokenStart + tmp9;
          let tmp12 = sum;
          if (sum < self.scanner.tokenEnd) {
            const source3 = self.scanner.source;
            let tmp16 = sum;
            tmp12 = sum;
            const obj7 = tokenize;
            if (obj7.isDigit(source3.charCodeAt(sum))) {
              const sum1 = tmp16 + 1;
              tmp12 = sum1;
              while (sum1 < self.scanner.tokenEnd) {
                let obj2 = tokenize;
                let source2 = self.scanner.source;
                tmp16 = sum1;
                tmp12 = sum1;
                if (!obj2.isDigit(source2.charCodeAt(sum1))) {
                  break;
                }
              }
            }
          }
          if (tmp12 === self.scanner.tokenStart + (charCodeAtResult === tmp44 || charCodeAtResult === c8)) {
            self.error("Integer is expected", self.scanner.tokenStart + (charCodeAtResult === tmp44 || charCodeAtResult === c8));
          }
          expectCharCode.call(self, tmp12 - self.scanner.tokenStart, c9);
          const str3 = self.scanner.source;
          const substr = str3.substring(tokenStart, tmp12);
          const sum2 = tmp12 + 1;
          const obj3 = expectCharCode;
          if (sum2 === self.scanner.tokenEnd) {
            const iter3 = self.scanner;
            iter3.next();
            consumeResult = consumeB.call(self);
            str = substr;
          } else {
            obj3.call(self, tmp12 - self.scanner.tokenStart + 1, c8);
            if (tmp12 + 2 === self.scanner.tokenEnd) {
              const iter2 = self.scanner;
              iter2.next();
              const scanner3 = self.scanner;
              scanner3.skipSC();
              checkTokenIsInteger.call(self, c10);
              consumeResult = `-${self.consume(Number)}`;
              str = substr;
            } else {
              checkInteger.call(self, tmp12 - self.scanner.tokenStart + 2, c10);
              const iter = self.scanner;
              iter.next();
              const scanner2 = self.scanner;
              consumeResult = scanner2.substrToCursor(sum2);
              str = substr;
            }
          }
        } else {
          self.error();
          consumeResult = null;
          str = null;
        }
      }
      const scanner4 = self.scanner;
      let num5 = 0;
      if (scanner4.isDelim(c7)) {
        const iter4 = self.scanner;
        iter4.next();
        num5 = 1;
      }
      expectCharCode.call(self, 0, c9);
      const scanner5 = self.scanner;
      const tokenLength1 = scanner5.getTokenLength();
      if (1 === tokenLength1) {
        const iter7 = self.scanner;
        iter7.next();
        str = "1";
        consumeResult = consumeB.call(self);
      } else if (2 === tokenLength1) {
        expectCharCode.call(self, 1, c8);
        const iter6 = self.scanner;
        iter6.next();
        const scanner7 = self.scanner;
        scanner7.skipSC();
        checkTokenIsInteger.call(self, c10);
        consumeResult = `-${self.consume(tmp)}`;
        str = "1";
      } else {
        expectCharCode.call(self, 1, c8);
        checkInteger.call(self, 2, c10);
        const iter5 = self.scanner;
        iter5.next();
        const scanner6 = self.scanner;
        consumeResult = scanner6.substrToCursor(tokenStart + num5 + 1);
        str = "1";
      }
    }
    let substr1 = str;
    const tmp37 = null !== str && str.charCodeAt(0) === c7;
    if (tmp37) {
      substr1 = str.substr(1);
    }
    let substr2 = consumeResult;
    const tmp40 = null !== consumeResult && consumeResult.charCodeAt(0) === c7;
    if (tmp40) {
      substr2 = consumeResult.substr(1);
    }
    const obj6 = { type: "AnPlusB", loc: self.getLocation(tokenStart, self.scanner.tokenStart), a: substr1, b: substr2 };
    return obj6;
  },
  generate(arg0) {
    const self = this;
    const chunk = this.chunk;
    const tmp = null !== arg0.a && undefined !== arg0.a;
    const tmp2 = null !== arg0.b && undefined !== arg0.b;
    if (tmp) {
      let str = "+n";
      if ("+1" !== arg0.a) {
        let str5 = "n";
        if ("1" !== arg0.a) {
          let str6 = "-n";
          if ("-1" !== arg0.a) {
            str6 = `${arg0.a}n`;
          }
          str5 = str6;
        }
        str = str5;
      }
      chunk(str);
      if (tmp2) {
        const _String2 = String;
        const str8 = String(arg0.b);
        if ("-" !== str8.charAt(0)) {
          if ("+" !== str8.charAt(0)) {
            self.chunk("+");
            self.chunk(str8);
          }
        }
        self.chunk(str8.charAt(0));
        self.chunk(str8.substr(1));
      }
    } else {
      const _String = String;
      chunk(String(arg0.b));
    }
  }
};
obj2 = { a: items, b: items1 };
items = [String, null];
items1 = [String, null];

export default obj;
