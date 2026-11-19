// Module ID: 16286
// Function ID: 16287
// Name: tokenize
// Dependencies: [16235]

// Module 16286 (tokenize)
import tokenize from "tokenize" /* 16235 */;

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
