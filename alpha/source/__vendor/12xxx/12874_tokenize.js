// Module ID: 12874
// Function ID: 12875
// Name: tokenize
// Dependencies: [12798]

// Module 12874 (tokenize)
import tokenize from "tokenize" /* 12798 */;

let items;
let obj2;
function consumeRaw(arg0) {
  return this.Raw(arg0, null, false);
}
const WhiteSpace = tokenize.TYPE.WhiteSpace;
const Comment = tokenize.TYPE.Comment;
const AtKeyword = tokenize.TYPE.AtKeyword;
const CDO = tokenize.TYPE.CDO;
const CDC = tokenize.TYPE.CDC;
const obj = {
  name: "StyleSheet",
  structure: obj2,
  parse() {
    const self = this;
    const tokenStart = this.scanner.tokenStart;
    const list = this.createList();
    if (!this.scanner.eof) {
      do {
        let tokenType = self.scanner.tokenType;
        if (WhiteSpace === tokenType) {
          let iter2 = self.scanner;
          let nextResult = iter2.next();
        } else {
          let CommentResult;
          if (Comment === tokenType) {
            let source = self.scanner.source;
            if (33 !== source.charCodeAt(self.scanner.tokenStart + 2)) {
              let iter = self.scanner;
              let nextResult1 = iter.next();
            } else {
              CommentResult = self.Comment();
            }
          } else if (CDO === tokenType) {
            CommentResult = self.CDO();
          } else if (CDC === tokenType) {
            CommentResult = self.CDC();
          } else if (AtKeyword === tokenType) {
            CommentResult = self.parseWithFallback(self.Atrule, consumeRaw);
          } else {
            CommentResult = self.parseWithFallback(self.Rule, consumeRaw);
          }
          let arr = list.push(CommentResult);
        }
      } while (!self.scanner.eof);
    }
    const element = { type: "StyleSheet", loc: self.getLocation(tokenStart, self.scanner.tokenStart), children: list };
    return element;
  },
  generate(arg0) {
    this.children(arg0);
  },
  walkContext: "stylesheet"
};
obj2 = { children: items };
items = [["Comment", "CDO", "CDC", "Atrule", "Rule", "Raw"]];

export default obj;
