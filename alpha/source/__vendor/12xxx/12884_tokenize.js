// Module ID: 12884
// Function ID: 12885
// Name: tokenize
// Dependencies: [12833]

// Module 12884 (tokenize)
import tokenize from "tokenize" /* 12833 */;

let obj2;
const Ident = tokenize.TYPE.Ident;
let obj = {
  name: "ClassSelector",
  structure: obj2,
  parse() {
    const self = this;
    const scanner = this.scanner;
    if (!scanner.isDelim(46)) {
      self.error("Full stop is expected");
    }
    const iter = self.scanner;
    iter.next();
    const obj = { type: "ClassSelector", loc: self.getLocation(self.scanner.tokenStart - 1, self.scanner.tokenEnd), name: self.consume(Ident) };
    return obj;
  },
  generate(name) {
    this.chunk(".");
    this.chunk(name.name);
  }
};
obj2 = { name: String };

export default obj;
