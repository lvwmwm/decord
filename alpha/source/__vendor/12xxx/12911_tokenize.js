// Module ID: 12911
// Function ID: 12912
// Name: tokenize
// Dependencies: [12833]

// Module 12911 (tokenize)
import tokenize from "tokenize" /* 12833 */;

let obj2;
function eatHexSequence(arg0, arg1) {
  const self = this;
  let sum = this.scanner.tokenStart + arg0;
  let num = 0;
  let num2 = 0;
  if (sum < this.scanner.tokenEnd) {
    while (true) {
      let source = self.scanner.source;
      let charCodeAtResult = source.charCodeAt(sum);
      if (45 === charCodeAtResult) {
        if (arg1) {
          if (0 !== num) {
            break;
          }
        }
      }
      let obj = tokenize;
      if (!obj.isHexDigit(charCodeAtResult)) {
        let str;
        if (arg1) {
          if (0 !== num) {
            let str2 = "";
            if (num < 6) {
              str2 = " or hex digit";
            }
            let _HermesInternal = HermesInternal;
            str = "HyphenMinus" + str2 + " is expected";
            let tmp7Result = tmp7(str, sum);
          }
        }
        str = "Unexpected input";
        if (num < 6) {
          str = "Hex digit is expected";
        }
      }
      let sum1 = num + 1;
      if (6 < sum1) {
        let errorResult = self.error("Too many hex digits", sum);
      }
      sum = sum + 1;
      num = sum1;
      num2 = sum1;
    }
    if (0 === eatHexSequence.call(self, arg0 + num + 1, false)) {
      self.error();
    }
    return -1;
  }
  const iter = self.scanner;
  iter.next();
  return num2;
}
function eatQuestionMarkSequence(arg0) {
  let scanner2;
  const self = this;
  const scanner = this.scanner;
  let num = 0;
  if (scanner.isDelim(63)) {
    do {
      let sum = num + 1;
      if (sum > arg0) {
        let errorResult = self.error("Too many question marks");
      }
      let iter = self.scanner;
      let nextResult = iter.next();
      scanner2 = self.scanner;
      num = sum;
    } while (scanner2.isDelim(63));
  }
}
function startsWith(arg0) {
  const self = this;
  const source = this.scanner.source;
  if (source.charCodeAt(this.scanner.tokenStart) !== arg0) {
    self.error(`${tokenize.NAME[arg0]} is expected`);
  }
}
function scanUnicodeRange() {
  let tmp3;
  const self = this;
  const scanner = this.scanner;
  if (scanner.isDelim(43)) {
    this.scanner.next();
    if (self.scanner.tokenType === Ident) {
      const callResult = eatHexSequence.call(self, 0, true);
      if (callResult > 0) {
        eatQuestionMarkSequence.call(self, 6 - callResult);
      }
    } else {
      const scanner3 = self.scanner;
      if (scanner3.isDelim(63)) {
        const iter2 = self.scanner;
        iter2.next();
        eatQuestionMarkSequence.call(self, 5);
      } else {
        self.error("Hex digit or question mark is expected");
      }
    }
    tmp3 = tmp12;
  } else if (this.scanner.tokenType === Number) {
    startsWith.call(self, 43);
    const scanner2 = self.scanner;
    const callResult4 = eatHexSequence.call(self, 1, true);
    const obj = startsWith;
    const obj2 = eatHexSequence;
    if (scanner2.isDelim(63)) {
      eatQuestionMarkSequence.call(self, 6 - callResult4);
    } else if (self.scanner.tokenType === Dimension) {
      obj.call(self, 45);
      obj2.call(self, 1, false);
    }
    tmp3 = tmp8;
  } else if (self.scanner.tokenType === Dimension) {
    startsWith.call(self, 43);
    const callResult9 = eatHexSequence.call(self, 1, true);
    if (callResult9 > 0) {
      eatQuestionMarkSequence.call(self, 6 - callResult9);
    }
  } else {
    self.error();
  }
  return tmp3;
}
const Ident = tokenize.TYPE.Ident;
const Number = tokenize.TYPE.Number;
const Dimension = tokenize.TYPE.Dimension;
let obj = {
  name: "UnicodeRange",
  structure: obj2,
  parse() {
    let scanner;
    const self = this;
    const tokenStart = this.scanner.tokenStart;
    const obj = tokenize;
    if (!obj.cmpChar(this.scanner.source, tokenStart, 117)) {
      self.error("U is expected");
    }
    const tmpResult = tokenize;
    if (!tmpResult.cmpChar(self.scanner.source, tokenStart + 1, 43)) {
      self.error("Plus sign is expected");
    }
    const iter = self.scanner;
    iter.next();
    scanUnicodeRange.call(self);
    const obj2 = { type: "UnicodeRange", loc: self.getLocation(tokenStart, self.scanner.tokenStart), value: scanner.substrToCursor(tokenStart) };
    scanner = self.scanner;
    return obj2;
  },
  generate(value) {
    this.chunk(value.value);
  }
};
obj2 = { value: String };

export default obj;
