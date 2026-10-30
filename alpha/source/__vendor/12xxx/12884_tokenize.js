// Module ID: 12884
// Function ID: 12885
// Name: tokenize
// Dependencies: [12798]

// Module 12884 (tokenize)
import tokenize from "tokenize" /* 12798 */;

const Delim = tokenize.TYPE.Delim;
const Ident = tokenize.TYPE.Ident;
const Dimension = tokenize.TYPE.Dimension;
const Percentage = tokenize.TYPE.Percentage;
const Number = tokenize.TYPE.Number;
const Hash = tokenize.TYPE.Hash;
const Colon = tokenize.TYPE.Colon;
const LeftSquareBracket = tokenize.TYPE.LeftSquareBracket;
const obj = {
  getNode(arg0) {
    const self = this;
    const tokenType = this.scanner.tokenType;
    if (LeftSquareBracket === tokenType) {
      return self.AttributeSelector();
    } else if (Hash === tokenType) {
      return self.IdSelector();
    } else if (Colon === tokenType) {
      let result;
      const scanner = self.scanner;
      if (scanner.lookupType(1) === tmp6) {
        result = self.PseudoElementSelector();
      } else {
        result = self.PseudoClassSelector();
      }
      return result;
    } else if (Ident === tokenType) {
      return self.TypeSelector();
    } else {
      if (Number !== tokenType) {
        if (Percentage !== tokenType) {
          if (Dimension === tokenType) {
            const source = self.scanner.source;
            if (46 === source.charCodeAt(self.scanner.tokenStart)) {
              self.error("Identifier is expected", self.scanner.tokenStart + 1);
            }
          } else if (Delim === tokenType) {
            const source2 = self.scanner.source;
            const charCodeAtResult = source2.charCodeAt(self.scanner.tokenStart);
            if (43 !== charCodeAtResult) {
              if (62 !== charCodeAtResult) {
                if (126 !== charCodeAtResult) {
                  if (47 === charCodeAtResult) {
                    return self.Combinator();
                  } else if (46 === charCodeAtResult) {
                    return self.ClassSelector();
                  } else {
                    if (42 !== charCodeAtResult) {
                      if (124 !== charCodeAtResult) {
                        if (35 === charCodeAtResult) {
                          return self.IdSelector();
                        }
                      }
                    }
                    return self.TypeSelector();
                  }
                }
              }
            }
            arg0.space = null;
            arg0.ignoreWSAfter = true;
            return self.Combinator();
          }
        }
      }
      return self.Percentage();
    }
  }
};

export default obj;
