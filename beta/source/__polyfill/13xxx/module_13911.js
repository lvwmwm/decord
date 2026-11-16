// Module ID: 13911
// Function ID: 13912
// Dependencies: []

// Module 13911
let items;
let obj2;
const obj = {
  name: "Value",
  structure: obj2,
  parse() {
    let sequence;
    const tokenStart = this.scanner.tokenStart;
    const element = { type: "Value", loc: this.getLocation(tokenStart, this.scanner.tokenStart), children: sequence };
    sequence = this.readSequence(this.scope.Value);
    return element;
  },
  generate(arg0) {
    this.children(arg0);
  }
};
obj2 = { children: items };
items = [[]];

export default obj;
