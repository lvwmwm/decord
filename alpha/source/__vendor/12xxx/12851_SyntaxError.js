// Module ID: 12851
// Function ID: 12852
// Name: SyntaxError
// Dependencies: [12852]

// Module 12851 (SyntaxError)
import SyntaxError from "SyntaxError" /* 12852 */;

class Tokenizer {
  constructor(arg0) {

  }
}
Tokenizer.prototype = {
  charCodeAt(sum) {
    let num = 0;
    if (sum < this.str.length) {
      const str = this.str;
      num = str.charCodeAt(sum);
    }
    return num;
  },
  charCode() {
    return this.charCodeAt(this.pos);
  },
  nextCharCode() {
    return this.charCodeAt(this.pos + 1);
  },
  nextNonWsCode(pos) {
    return this.charCodeAt(this.findWsEnd(pos));
  },
  findWsEnd(pos) {
    const self = this;
    let sum = pos;
    let tmp2 = pos;
    if (pos < this.str.length) {
      while (true) {
        let str = self.str;
        let charCodeAtResult = str.charCodeAt(sum);
        if (13 !== charCodeAtResult) {
          if (10 !== charCodeAtResult) {
            if (12 !== charCodeAtResult) {
              if (32 !== charCodeAtResult) {
                tmp2 = sum;
                if (9 !== charCodeAtResult) {
                  break;
                }
              }
              break;
            }
          }
        }
        sum = sum + 1;
        tmp2 = sum;
        if (sum >= self.str.length) {
          break;
        }
      }
    }
    return tmp2;
  },
  substringToPos(wsEnd) {
    const str = this.str;
    this.pos = wsEnd;
    return str.substring(this.pos, wsEnd);
  },
  eat(arg0) {
    const self = this;
    if (this.charCode() !== arg0) {
      const _String = String;
      self.error(`Expect \`${String.fromCharCode(arg0)}\``);
    }
    self.pos = self.pos + 1;
  },
  peek() {
    const self = this;
    let str = "";
    if (this.pos < this.str.length) {
      const str2 = self.str;
      self.pos = +self.pos + 1;
      str = str2.charAt(tmp);
    }
    return str;
  },
  error(arg0) {
    const tmp = new SyntaxError(arg0, this.str, this.pos);
    throw tmp;
  }
};

export default Tokenizer;
