// Module ID: 13796
// Function ID: 13797
// Dependencies: []

// Module 13796
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
