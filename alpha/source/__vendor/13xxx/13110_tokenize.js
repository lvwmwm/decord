// Module ID: 13110
// Function ID: 13111
// Name: tokenize
// Dependencies: [13054, 13050]

// Module 13110 (tokenize)
import _mod13050 from "module_13050" /* 13050 */;
import tokenize from "tokenize" /* 13054 */;

let obj2;
const Dimension = tokenize.TYPE.Dimension;
let obj = {
  name: "Dimension",
  structure: obj2,
  parse() {
    const tokenStart = this.scanner.tokenStart;
    const obj = _mod13050;
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
