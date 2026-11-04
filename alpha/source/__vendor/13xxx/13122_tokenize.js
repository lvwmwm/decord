// Module ID: 13122
// Function ID: 13123
// Name: tokenize
// Dependencies: [13054, 13050]

// Module 13122 (tokenize)
import _mod13050 from "module_13050" /* 13050 */;
import tokenize from "tokenize" /* 13054 */;

let obj2;
const Percentage = tokenize.TYPE.Percentage;
let obj = {
  name: "Percentage",
  structure: obj2,
  parse() {
    const tokenStart = this.scanner.tokenStart;
    const obj = _mod13050;
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
