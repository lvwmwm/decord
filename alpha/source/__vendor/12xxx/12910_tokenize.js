// Module ID: 12910
// Function ID: 12911
// Name: tokenize
// Dependencies: [12833]

// Module 12910 (tokenize)
import tokenize from "tokenize" /* 12833 */;

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
