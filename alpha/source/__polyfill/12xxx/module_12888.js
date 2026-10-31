// Module ID: 12888
// Function ID: 12889
// Dependencies: [12833, 12877]

// Module 12888
import tokenize from "tokenize" /* 12833 */;
import tokenize2 from "tokenize" /* 12877 */;

let items;
let obj2;
function consumeRaw(arg0) {
  return this.Raw(arg0, tokenize2.mode.semicolonIncluded, true);
}
const WhiteSpace = tokenize.TYPE.WhiteSpace;
const Comment = tokenize.TYPE.Comment;
const Semicolon = tokenize.TYPE.Semicolon;
const obj = {
  name: "DeclarationList",
  structure: obj2,
  parse() {
    const self = this;
    const list = this.createList();
    if (!this.scanner.eof) {
      while (true) {
        let tokenType = self.scanner.tokenType;
        if (WhiteSpace !== tokenType) {
          if (Comment !== tokenType) {
            if (Semicolon !== tokenType) {
              let arr = list.push(self.parseWithFallback(self.Declaration, consumeRaw));
            }
            if (self.scanner.eof) {
              break;
            }
          }
        }
        let iter = self.scanner;
        let nextResult = iter.next();
      }
    }
    const element = { type: "DeclarationList", loc: self.getLocationFromList(list), children: list };
    return element;
  },
  generate(arg0) {
    this.children(arg0, function(type) {
      if ("Declaration" === type.type) {
        const self = this;
        this.chunk(";");
      }
    });
  }
};
obj2 = { children: items };
items = [["Declaration"]];

export default obj;
