// Module ID: 12885
// Function ID: 12886
// Name: tokenize
// Dependencies: [12833]

// Module 12885 (tokenize)
import tokenize from "tokenize" /* 12833 */;

let obj2;
const Ident = tokenize.TYPE.Ident;
let obj = {
  name: "Combinator",
  structure: obj2,
  parse() {
    let scanner3;
    const self = this;
    const tokenStart = this.scanner.tokenStart;
    const source = this.scanner.source;
    const charCodeAtResult = source.charCodeAt(this.scanner.tokenStart);
    if (62 !== charCodeAtResult) {
      if (43 !== charCodeAtResult) {
        if (126 !== charCodeAtResult) {
          if (47 === charCodeAtResult) {
            const iter = self.scanner;
            iter.next();
            let tmp5 = self.scanner.tokenType === Ident;
            if (tmp5) {
              const scanner = self.scanner;
              tmp5 = false !== scanner.lookupValue(0, "deep");
            }
            if (!tmp5) {
              self.error("Identifier `deep` is expected");
            }
            const iter2 = self.scanner;
            iter2.next();
            const scanner2 = self.scanner;
            if (!scanner2.isDelim(47)) {
              self.error("Solidus is expected");
            }
            const iter3 = self.scanner;
            iter3.next();
          } else {
            self.error("Combinator is expected");
          }
        }
        const obj = { type: "Combinator", loc: self.getLocation(tokenStart, self.scanner.tokenStart), name: scanner3.substrToCursor(tokenStart) };
        scanner3 = self.scanner;
        return obj;
      }
    }
    const iter4 = self.scanner;
    iter4.next();
  },
  generate(name) {
    this.chunk(name.name);
  }
};
obj2 = { name: String };

export default obj;
