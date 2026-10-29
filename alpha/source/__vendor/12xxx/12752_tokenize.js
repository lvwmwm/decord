// Module ID: 12752
// Function ID: 12753
// Name: tokenize
// Dependencies: [12657]

// Module 12752 (tokenize)
import tokenize from "tokenize" /* 12657 */;

function consumeRaw() {
  return this.createSingleNodeList(this.Raw(this.scanner.tokenIndex, null, false));
}
function parentheses() {
  const self = this;
  const scanner = this.scanner;
  scanner.skipSC();
  if (this.scanner.tokenType === Ident) {
    let singleNodeList;
    if (self.lookupNonWSType(1) === Colon) {
      singleNodeList = self.createSingleNodeList(self.Declaration());
    }
    return singleNodeList;
  }
  singleNodeList = readSequence.call(self);
}
function readSequence() {
  const self = this;
  const list = this.createList();
  const scanner = this.scanner;
  scanner.skipSC();
  let tmp2 = null;
  if (!this.scanner.eof) {
    while (true) {
      let WhiteSpaceResult;
      let tokenType = self.scanner.tokenType;
      if (WhiteSpace === tokenType) {
        WhiteSpaceResult = self.WhiteSpace();
      } else {
        if (Comment === tokenType) {
          let iter = self.scanner;
          let nextResult = iter.next();
          WhiteSpaceResult = tmp2;
        } else {
          let FunctionResult;
          if (Function === tokenType) {
            FunctionResult = self.Function(consumeRaw, self.scope.AtrulePrelude);
          } else {
            if (Ident === tokenType) {
              FunctionResult = self.Identifier();
            } else if (LeftParenthesis !== tokenType) {
              break;
            } else {
              FunctionResult = self.Parentheses(parentheses, self.scope.AtrulePrelude);
            }
            break;
          }
          WhiteSpaceResult = tmp2;
          if (null !== tmp2) {
            let arr = list.push(tmp2);
            WhiteSpaceResult = null;
          }
          let arr3 = list.push(FunctionResult);
        }
        break;
      }
      tmp2 = WhiteSpaceResult;
      if (self.scanner.eof) {
        break;
      }
    }
  }
  return list;
}
const WhiteSpace = tokenize.TYPE.WhiteSpace;
const Comment = tokenize.TYPE.Comment;
const Ident = tokenize.TYPE.Ident;
const Function = tokenize.TYPE.Function;
const Colon = tokenize.TYPE.Colon;
const LeftParenthesis = tokenize.TYPE.LeftParenthesis;
const obj = {
  parse: {
    prelude() {
      const self = this;
      const callResult = readSequence.call(self);
      if (null === self.getFirstListNode(callResult)) {
        self.error("Condition is expected");
      }
      return callResult;
    },
    block() {
      return this.Block(false);
    }
  }
};

export default obj;
