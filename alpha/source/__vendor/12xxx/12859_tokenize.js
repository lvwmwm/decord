// Module ID: 12859
// Function ID: 12860
// Name: tokenize
// Dependencies: [12798]

// Module 12859 (tokenize)
import tokenize from "tokenize" /* 12798 */;

let obj2;
const Ident = tokenize.TYPE.Ident;
const Number = tokenize.TYPE.Number;
const Dimension = tokenize.TYPE.Dimension;
const LeftParenthesis = tokenize.TYPE.LeftParenthesis;
const RightParenthesis = tokenize.TYPE.RightParenthesis;
const Colon = tokenize.TYPE.Colon;
const Delim = tokenize.TYPE.Delim;
let obj = {
  name: "MediaFeature",
  structure: obj2,
  parse() {
    const self = this;
    const tokenStart = this.scanner.tokenStart;
    this.eat(LeftParenthesis);
    const scanner = this.scanner;
    scanner.skipSC();
    const scanner2 = this.scanner;
    const consumeResult = this.consume(Ident);
    scanner2.skipSC();
    let tmp7 = null;
    const tmp3 = Ident;
    const tmp6 = RightParenthesis;
    if (this.scanner.tokenType !== RightParenthesis) {
      let DimensionResult;
      self.eat(Colon);
      const scanner4 = self.scanner;
      scanner4.skipSC();
      const tokenType = self.scanner.tokenType;
      if (Number === tokenType) {
        let RatioResult;
        if (self.lookupNonWSType(1) === Delim) {
          RatioResult = self.Ratio();
        } else {
          RatioResult = self.Number();
        }
        DimensionResult = RatioResult;
      } else if (Dimension === tokenType) {
        DimensionResult = self.Dimension();
      } else if (tmp3 === tokenType) {
        DimensionResult = self.Identifier();
      } else {
        self.error("Number, dimension, ratio or identifier is expected");
        DimensionResult = null;
      }
      const scanner3 = self.scanner;
      scanner3.skipSC();
      tmp7 = DimensionResult;
    }
    self.eat(tmp6);
    const obj = { type: "MediaFeature", loc: self.getLocation(tokenStart, self.scanner.tokenStart), name: consumeResult, value: tmp7 };
    return obj;
  },
  generate(name) {
    const self = this;
    this.chunk("(");
    this.chunk(name.name);
    if (null !== name.value) {
      self.chunk(":");
      self.node(name.value);
    }
    self.chunk(")");
  }
};
obj2 = { name: String, value: ["Identifier", "Number", "Dimension", "Ratio", null] };

export default obj;
