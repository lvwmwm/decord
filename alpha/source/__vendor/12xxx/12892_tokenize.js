// Module ID: 12892
// Function ID: 12893
// Name: tokenize
// Dependencies: [12836, 12832]

// Module 12892 (tokenize)
import _mod12832 from "module_12832" /* 12832 */;
import tokenize from "tokenize" /* 12836 */;

let obj2;
const Dimension = tokenize.TYPE.Dimension;
let obj = {
  name: "Dimension",
  structure: obj2,
  parse() {
    const tokenStart = this.scanner.tokenStart;
    const obj = _mod12832;
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
