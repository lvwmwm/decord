// Module ID: 12904
// Function ID: 12905
// Name: tokenize
// Dependencies: [12836, 12832]

// Module 12904 (tokenize)
import _mod12832 from "module_12832" /* 12832 */;
import tokenize from "tokenize" /* 12836 */;

let obj2;
const Percentage = tokenize.TYPE.Percentage;
let obj = {
  name: "Percentage",
  structure: obj2,
  parse() {
    const tokenStart = this.scanner.tokenStart;
    const obj = _mod12832;
    const consumeNumberResult = obj.consumeNumber(this.scanner.source, tokenStart);
    this.eat(Percentage);
    const obj2 = { type: "Percentage", loc: this.getLocation(tokenStart, this.scanner.tokenStart), value: str.substring(tokenStart, consumeNumberResult) };
    return obj2;
  },
  generate(value) {
    this.chunk(value.value);
    this.chunk("%");
  }
};
obj2 = { value: String };

export default obj;
