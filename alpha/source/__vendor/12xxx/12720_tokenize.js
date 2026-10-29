// Module ID: 12720
// Function ID: 12721
// Name: tokenize
// Dependencies: [12657]

// Module 12720 (tokenize)
import tokenize from "tokenize" /* 12657 */;

let items;
let obj2;
const Comma = tokenize.TYPE.Comma;
const obj = {
  name: "MediaQueryList",
  structure: obj2,
  parse(arg0) {
    const self = this;
    const list = this.createList();
    const scanner = this.scanner;
    scanner.skipSC();
    if (!this.scanner.eof) {
      list.push(self.MediaQuery(arg0));
      if (self.scanner.tokenType === Comma) {
        const iter = self.scanner;
        iter.next();
        while (!self.scanner.eof) {
          let arr3 = list.push(self.MediaQuery(arg0));
          if (self.scanner.tokenType !== Comma) {
            break;
          }
        }
      }
    }
    const element = { type: "MediaQueryList", loc: self.getLocationFromList(list), children: list };
    return element;
  },
  generate(arg0) {
    this.children(arg0, function() {
      this.chunk(",");
    });
  }
};
obj2 = { children: items };
items = [["MediaQuery"]];

export default obj;
