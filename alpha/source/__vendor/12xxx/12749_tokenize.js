// Module ID: 12749
// Function ID: 12750
// Name: tokenize
// Dependencies: [12657]

// Module 12749 (tokenize)
import tokenize from "tokenize" /* 12657 */;

const String = tokenize.TYPE.String;
const Ident = tokenize.TYPE.Ident;
const Url = tokenize.TYPE.Url;
const Function = tokenize.TYPE.Function;
const LeftParenthesis = tokenize.TYPE.LeftParenthesis;
const obj = {
  parse: {
    prelude() {
      const self = this;
      const list = this.createList();
      const scanner = this.scanner;
      scanner.skipSC();
      const tokenType = this.scanner.tokenType;
      if (String === tokenType) {
        list.push(self.String());
      } else {
        if (Url !== tokenType) {
          if (Function !== tokenType) {
            self.error("String or url() is expected");
          }
        }
        list.push(self.Url());
      }
      const tmp7 = self.lookupNonWSType(0) !== Ident && self.lookupNonWSType(0) !== LeftParenthesis;
      if (!tmp7) {
        list.push(self.WhiteSpace());
        list.push(self.MediaQueryList());
      }
      return list;
    },
    block: null
  }
};

export default obj;
