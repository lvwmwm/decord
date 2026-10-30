// Module ID: 12869
// Function ID: 12870
// Name: tokenize
// Dependencies: [12798]

// Module 12869 (tokenize)
import tokenize from "tokenize" /* 12798 */;

let rect;
function consumeNumber() {
  let num;
  const self = this;
  const scanner = this.scanner;
  scanner.skipWS();
  const consumeResult = this.consume(Number);
  for (let num = 0; num < consumeResult.length; num = num + 1) {
    let charCodeAtResult = consumeResult.charCodeAt(num);
    let obj = tokenize;
    let isDigitResult = obj.isDigit(charCodeAtResult);
    if (!isDigitResult) {
      isDigitResult = 46 === charCodeAtResult;
    }
    if (!isDigitResult) {
      let errorResult = self.error("Unsigned number is expected", self.scanner.tokenStart - consumeResult.length + num);
    }
  }
  if (0 === Number(consumeResult)) {
    self.error("Zero number is not allowed", self.scanner.tokenStart - consumeResult.length);
  }
  return consumeResult;
}
const Number = tokenize.TYPE.Number;
const Delim = tokenize.TYPE.Delim;
let obj = {
  name: "Ratio",
  structure: rect,
  parse() {
    let callResult1;
    const self = this;
    const tokenStart = this.scanner.tokenStart;
    const scanner = self.scanner;
    const callResult = consumeNumber.call(self);
    scanner.skipWS();
    const scanner2 = self.scanner;
    const obj = consumeNumber;
    if (!scanner2.isDelim(47)) {
      self.error("Solidus is expected");
    }
    self.eat(Delim);
    const rect = { type: "Ratio", loc: self.getLocation(tokenStart, self.scanner.tokenStart), left: callResult, right: callResult1 };
    callResult1 = obj.call(self);
    return rect;
  },
  generate(left) {
    this.chunk(left.left);
    this.chunk("/");
    this.chunk(left.right);
  }
};
rect = { left: String, right: String };

export default obj;
