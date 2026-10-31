// Module ID: 12899
// Function ID: 12900
// Dependencies: []

// Module 12899
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
