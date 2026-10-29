// Module ID: 12719
// Function ID: 12720
// Name: tokenize
// Dependencies: [12657]

// Module 12719 (tokenize)
import tokenize from "tokenize" /* 12657 */;

let items;
let obj2;
const WhiteSpace = tokenize.TYPE.WhiteSpace;
const Comment = tokenize.TYPE.Comment;
const Ident = tokenize.TYPE.Ident;
const LeftParenthesis = tokenize.TYPE.LeftParenthesis;
const obj = {
  name: "MediaQuery",
  structure: obj2,
  parse() {
    const self = this;
    const scanner = this.scanner;
    scanner.skipSC();
    const list = this.createList();
    let tmp2 = null;
    let tmp3 = null;
    let tmp4 = null;
    if (!this.scanner.eof) {
      while (true) {
        let WhiteSpaceResult;
        let IdentifierResult;
        let tokenType = self.scanner.tokenType;
        if (Comment === tokenType) {
          let iter = self.scanner;
          let nextResult = iter.next();
          WhiteSpaceResult = tmp2;
          IdentifierResult = tmp3;
        } else {
          if (WhiteSpace === tokenType) {
            WhiteSpaceResult = self.WhiteSpace();
            IdentifierResult = tmp3;
          } else {
            if (Ident === tokenType) {
              IdentifierResult = self.Identifier();
              WhiteSpaceResult = tmp2;
              if (null !== tmp2) {
                let arr = list.push(tmp2);
                WhiteSpaceResult = null;
              }
              let arr3 = list.push(IdentifierResult);
            } else {
              tmp4 = tmp3;
              if (LeftParenthesis !== tokenType) {
                break;
              } else {
                IdentifierResult = self.MediaFeature();
              }
            }
            break;
          }
          break;
        }
        tmp2 = WhiteSpaceResult;
        tmp3 = IdentifierResult;
        tmp4 = IdentifierResult;
        if (self.scanner.eof) {
          break;
        }
      }
    }
    if (null === tmp4) {
      self.error("Identifier or parenthesis is expected");
    }
    const element = { type: "MediaQuery", loc: self.getLocationFromList(list), children: list };
    return element;
  },
  generate(arg0) {
    this.children(arg0);
  }
};
obj2 = { children: items };
items = [["Identifier", "MediaFeature", "WhiteSpace"]];

export default obj;
