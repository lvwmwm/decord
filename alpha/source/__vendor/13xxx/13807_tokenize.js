// Module ID: 13807
// Function ID: 13808
// Name: tokenize
// Dependencies: [13730]

// Module 13807 (tokenize)
import tokenize from "tokenize" /* 13730 */;

let obj2;
function eatIdentifierOrAsterisk() {
  const self = this;
  let tmp = this.scanner.tokenType !== Ident;
  if (tmp) {
    const scanner = self.scanner;
    tmp = false === scanner.isDelim(42);
  }
  if (tmp) {
    self.error("Identifier or asterisk is expected");
  }
  const iter = self.scanner;
  iter.next();
}
const Ident = tokenize.TYPE.Ident;
let obj = {
  name: "TypeSelector",
  structure: obj2,
  parse() {
    let scanner3;
    const self = this;
    const tokenStart = this.scanner.tokenStart;
    const scanner = this.scanner;
    if (scanner.isDelim(124)) {
      const iter2 = self.scanner;
      iter2.next();
      eatIdentifierOrAsterisk.call(self);
    } else {
      eatIdentifierOrAsterisk.call(self);
      const scanner2 = self.scanner;
      const obj = eatIdentifierOrAsterisk;
      if (scanner2.isDelim(124)) {
        const iter = self.scanner;
        iter.next();
        obj.call(self);
      }
    }
    const obj2 = { type: "TypeSelector", loc: self.getLocation(tokenStart, self.scanner.tokenStart), name: scanner3.substrToCursor(tokenStart) };
    scanner3 = self.scanner;
    return obj2;
  },
  generate(name) {
    this.chunk(name.name);
  }
};
obj2 = { name: String };

export default obj;
