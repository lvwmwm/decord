// Module ID: 12731
// Function ID: 12732
// Name: tokenize
// Dependencies: [12657]

// Module 12731 (tokenize)
import tokenize from "tokenize" /* 12657 */;

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
