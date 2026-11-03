// Module ID: 13035
// Function ID: 13036
// Name: tokenize
// Dependencies: [12972]

// Module 13035 (tokenize)
import tokenize from "tokenize" /* 12972 */;

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
