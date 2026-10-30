// Module ID: 12864
// Function ID: 12865
// Dependencies: []

// Module 12864
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
