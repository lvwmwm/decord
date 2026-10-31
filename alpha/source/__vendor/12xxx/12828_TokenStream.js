// Module ID: 12828
// Function ID: 12829
// Name: TokenStream
// Dependencies: [12827, 12829]

// Module 12828 (TokenStream)
import _mod12827 from "module_12827" /* 12827 */;
import _mod12829 from "module_12829" /* 12829 */;

const EOF = _mod12827.TYPE.EOF;
const WhiteSpace = _mod12827.TYPE.WhiteSpace;
const Comment = _mod12827.TYPE.Comment;
let c5 = 16777215;
let c6 = 24;
class TokenStream {
  constructor() {
    const obj = { offsetAndType: null, balance: null };
    obj.reset();
  }
}
TokenStream.prototype = {
  reset() {
    let obj;
    obj = { eof: false, tokenIndex: -1, tokenType: 0, tokenStart: obj.firstCharOffset, tokenEnd: obj.firstCharOffset };
  },
  lookupType(diff) {
    let tmp2;
    const sum = diff + this.tokenIndex;
    if (sum < this.tokenCount) {
      tmp2 = this.offsetAndType[sum] >> c6;
    } else {
      tmp2 = EOF;
    }
    return tmp2;
  },
  lookupOffset(diff) {
    let length;
    const self = this;
    const sum = diff + this.tokenIndex;
    if (sum < this.tokenCount) {
      length = self.offsetAndType[sum - 1] & c5;
    } else {
      length = self.source.length;
    }
    return length;
  },
  lookupValue(arg0, deep) {
    const self = this;
    const sum = arg0 + this.tokenIndex;
    let cmpStrResult = sum < this.tokenCount;
    if (cmpStrResult) {
      const obj = _mod12829;
      cmpStrResult = obj.cmpStr(self.source, self.offsetAndType[sum - 1] & c5, self.offsetAndType[sum] & c5, deep);
    }
    return cmpStrResult;
  },
  getTokenStart(arg0) {
    let firstCharOffset;
    const self = this;
    if (arg0 === this.tokenIndex) {
      firstCharOffset = self.tokenStart;
    } else if (arg0 > 0) {
      let tmp2;
      if (arg0 < self.tokenCount) {
        tmp2 = self.offsetAndType[arg0 - 1] & c5;
      } else {
        tmp2 = self.offsetAndType[self.tokenCount] & c5;
      }
      firstCharOffset = tmp2;
    } else {
      firstCharOffset = self.firstCharOffset;
    }
    return firstCharOffset;
  },
  getRawLength(arg0, balanceEnd) {
    const self = this;
    let tmp = this.offsetAndType[Math.max(Math, arg0 - 1, 0)] & c5;
    let sum = arg0;
    if (arg0 < this.tokenCount) {
      let tmp12 = arg0;
      sum = arg0;
      if (self.balance[arg0] >= arg0) {
        const tmp4 = balanceEnd(self.offsetAndType[tmp12] >> c6, self.source, tmp);
        sum = tmp12;
        while (1 !== tmp4) {
          if (2 === tmp4) {
            sum = tmp12 + 1;
            break;
          } else {
            let tmp7 = tmp12;
            if (self.balance[tmp11] === tmp12) {
              tmp7 = tmp11;
            }
            let sum1 = tmp7 + 1;
            sum = sum1;
            if (sum1 >= self.tokenCount) {
              break;
            } else {
              tmp = tmp9;
              tmp12 = sum1;
              sum = sum1;
              if (self.balance[sum1] < arg0) {
                break;
              }
            }
          }
          break;
        }
      }
    }
    return sum - self.tokenIndex;
  },
  isBalanceEdge(tokenIndex) {
    return this.balance[this.tokenIndex] < tokenIndex;
  },
  isDelim(c7, diff) {
    let tmp4;
    const self = this;
    const tmp = diff;
    if (tmp) {
      const lookupTypeResult = self.lookupType(diff);
      let tmp8 = lookupTypeResult === _mod12827.TYPE.Delim;
      if (tmp8) {
        const source2 = self.source;
        tmp8 = source2.charCodeAt(self.lookupOffset(diff)) === c7;
      }
      tmp4 = tmp8;
    } else {
      tmp4 = self.tokenType === _mod12827.TYPE.Delim;
      if (tmp4) {
        const source = self.source;
        tmp4 = source.charCodeAt(self.tokenStart) === c7;
      }
    }
    return tmp4;
  },
  getTokenValue() {
    const str = this.source;
    return str.substring(this.tokenStart, this.tokenEnd);
  },
  getTokenLength() {
    return this.tokenEnd - this.tokenStart;
  },
  substrToCursor(tokenStart) {
    const str = this.source;
    return str.substring(tokenStart, this.tokenStart);
  },
  skipWS() {
    const self = this;
    let tokenIndex = this.tokenIndex;
    let num = 0;
    if (tokenIndex < this.tokenCount) {
      let num3 = 0;
      num = 0;
      if (self.offsetAndType[tokenIndex] >> c6 === WhiteSpace) {
        const sum = tokenIndex + 1;
        const sum1 = num3 + 1;
        num = sum1;
        while (sum < self.tokenCount) {
          num3 = sum1;
          tokenIndex = sum;
          num = sum1;
          if (self.offsetAndType[sum] >> c6 !== WhiteSpace) {
            break;
          }
        }
      }
    }
    if (0 < num) {
      self.skip(num);
    }
  },
  skipSC() {
    let tokenType;
    const self = this;
    if (this.tokenType === WhiteSpace) {
      do {
        let nextResult = self.next();
        tokenType = self.tokenType;
      } while (tokenType === WhiteSpace);
    }
  },
  skip(arg0) {
    const self = this;
    const sum = this.tokenIndex + arg0;
    if (sum < this.tokenCount) {
      self.tokenIndex = sum;
      self.tokenStart = self.offsetAndType[sum - 1] & c5;
      self.tokenType = self.offsetAndType[sum] >> c6;
      self.tokenEnd = self.offsetAndType[sum] & c5;
    } else {
      self.tokenIndex = self.tokenCount;
      self.next();
    }
  },
  next() {
    const self = this;
    const sum = this.tokenIndex + 1;
    if (sum < this.tokenCount) {
      self.tokenIndex = sum;
      self.tokenStart = self.tokenEnd;
      self.tokenType = self.offsetAndType[sum] >> c6;
      self.tokenEnd = self.offsetAndType[sum] & c5;
    } else {
      self.tokenIndex = self.tokenCount;
      self.eof = true;
      self.tokenType = EOF;
      self.tokenEnd = self.source.length;
      self.tokenStart = self.source.length;
    }
  },
  forEachToken(fn) {
    let tokenCount;
    const self = this;
    let firstCharOffset = this.firstCharOffset;
    let num = 0;
    if (0 < this.tokenCount) {
      do {
        let tmp = self.offsetAndType[num];
        let tmp3 = tmp & c5;
        let tmp8 = fn(tmp >> c6, firstCharOffset, tmp3, num);
        num = num + 1;
        firstCharOffset = tmp3;
        tokenCount = self.tokenCount;
      } while (num < tokenCount);
    }
  },
  dump() {
    const self = this;
    const array = new Array(this.tokenCount);
    this.forEachToken((arg0, length, length2, idx) => {
      let str;
      const obj = { idx, type: _mod12827.NAME[arg0], chunk: str.substring(length, length2), balance: self.balance[idx] };
      str = self.source;
      array[idx] = obj;
    });
    return array;
  }
};

export default TokenStream;
