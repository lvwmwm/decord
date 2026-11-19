// Module ID: 16301
// Function ID: 16302
// Dependencies: []

// Module 16301
let obj2;
let obj = {
  name: "Operator",
  structure: obj2,
  parse() {
    let scanner;
    const tokenStart = this.scanner.tokenStart;
    const iter = this.scanner;
    iter.next();
    const obj = { type: "Operator", loc: this.getLocation(tokenStart, this.scanner.tokenStart), value: scanner.substrToCursor(tokenStart) };
    scanner = this.scanner;
    return obj;
  },
  generate(value) {
    this.chunk(value.value);
  }
};
obj2 = { value: String };

export default obj;
