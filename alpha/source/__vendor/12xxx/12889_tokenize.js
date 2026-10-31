// Module ID: 12889
// Function ID: 12890
// Name: tokenize
// Dependencies: [12833, 12829]

// Module 12889 (tokenize)
import _mod12829 from "module_12829" /* 12829 */;
import tokenize from "tokenize" /* 12833 */;

let obj2;
const Dimension = tokenize.TYPE.Dimension;
let obj = {
  name: "Dimension",
  structure: obj2,
  parse() {
    const tokenStart = this.scanner.tokenStart;
    const obj = _mod12829;
    const consumeNumberResult = obj.consumeNumber(this.scanner.source, tokenStart);
    this.eat(Dimension);
    const obj2 = { type: "Dimension", loc: this.getLocation(tokenStart, this.scanner.tokenStart), value: str.substring(tokenStart, consumeNumberResult), unit: str2.substring(consumeNumberResult, this.scanner.tokenStart) };
    return obj2;
  },
  generate(value) {
    this.chunk(value.value);
    this.chunk(value.unit);
  }
};
obj2 = { value: String, unit: String };

export default obj;
