// Module ID: 12701
// Function ID: 12702
// Name: tokenize
// Dependencies: [12657]

// Module 12701 (tokenize)
import tokenize from "tokenize" /* 12657 */;

let obj2;
function getOffsetExcludeWS() {
  const self = this;
  if (this.scanner.tokenIndex > 0) {
    let tokenStart;
    const scanner = self.scanner;
    if (scanner.lookupType(-1) === WhiteSpace) {
      let firstCharOffset;
      if (self.scanner.tokenIndex > 1) {
        const scanner2 = self.scanner;
        firstCharOffset = scanner2.getTokenStart(self.scanner.tokenIndex - 1);
      } else {
        firstCharOffset = self.scanner.firstCharOffset;
      }
      tokenStart = firstCharOffset;
    }
    return tokenStart;
  }
  tokenStart = self.scanner.tokenStart;
}
function balanceEnd() {
  return 0;
}
const WhiteSpace = tokenize.TYPE.WhiteSpace;
const Semicolon = tokenize.TYPE.Semicolon;
const LeftCurlyBracket = tokenize.TYPE.LeftCurlyBracket;
const Delim = tokenize.TYPE.Delim;
let obj = {
  name: "Raw",
  structure: obj2,
  parse(arg0, balanceEnd, arg2) {
    let scanner2;
    let scanner3;
    const self = this;
    let tmp = balanceEnd;
    const scanner = this.scanner;
    const tokenStart1 = scanner.getTokenStart(arg0);
    ({ scanner: scanner2, scanner: scanner3 } = this);
    const skip = scanner2.skip;
    const getRawLength = scanner3.getRawLength;
    if (!balanceEnd) {
      tmp = balanceEnd;
    }
    skip(getRawLength(arg0, tmp));
    if (arg2) {
      let tokenStart;
      if (self.scanner.tokenStart > tokenStart1) {
        tokenStart = getOffsetExcludeWS.call(self);
      }
      const obj = { type: "Raw", loc: self.getLocation(tokenStart1, tokenStart), value: str.substring(tokenStart1, tokenStart) };
      return obj;
    }
    tokenStart = self.scanner.tokenStart;
  },
  generate(value) {
    this.chunk(value.value);
  },
  mode: {
    default: balanceEnd,
    leftCurlyBracket(arg0) {
      let num = 0;
      if (arg0 === LeftCurlyBracket) {
        num = 1;
      }
      return num;
    },
    leftCurlyBracketOrSemicolon(arg0) {
      let num;
      if (arg0 === LeftCurlyBracket) {
        num = 1;
      } else {
        num = 0;
      }
      return num;
    },
    exclamationMarkOrSemicolon(arg0, str, sum) {
      if (arg0 !== Delim) {
        let num2 = 0;
        return num2;
      }
      num2 = 1;
    },
    semicolonIncluded(arg0) {
      let num = 0;
      if (arg0 === Semicolon) {
        num = 2;
      }
      return num;
    }
  }
};
obj2 = { value: String };

export default obj;
