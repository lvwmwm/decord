// Module ID: 13101
// Function ID: 13102
// Name: tokenize
// Dependencies: [13027]

// Module 13101 (tokenize)
import tokenize from "tokenize" /* 13027 */;

let items;
let obj2;
const Comma = tokenize.TYPE.Comma;
const obj = {
  name: "SelectorList",
  structure: obj2,
  parse() {
    const self = this;
    const list = this.createList();
    if (!this.scanner.eof) {
      list.push(self.Selector());
      if (self.scanner.tokenType === Comma) {
        const iter = self.scanner;
        iter.next();
        while (!self.scanner.eof) {
          let arr3 = list.push(self.Selector());
          if (self.scanner.tokenType !== Comma) {
            break;
          }
        }
      }
    }
    const element = { type: "SelectorList", loc: self.getLocationFromList(list), children: list };
    return element;
  },
  generate(arg0) {
    this.children(arg0, function() {
      this.chunk(",");
    });
  },
  walkContext: "selector"
};
obj2 = { children: items };
items = [["Selector", "Raw"]];

export default obj;
