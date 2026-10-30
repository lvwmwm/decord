// Module ID: 12849
// Function ID: 12850
// Name: tokenize
// Dependencies: [12798]

// Module 12849 (tokenize)
import tokenize from "tokenize" /* 12798 */;

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
