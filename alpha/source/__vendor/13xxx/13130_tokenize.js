// Module ID: 13130
// Function ID: 13131
// Name: tokenize
// Dependencies: [13062, 13058]

// Module 13130 (tokenize)
import _mod13058 from "module_13058" /* 13058 */;
import tokenize from "tokenize" /* 13062 */;

let obj2;
const Percentage = tokenize.TYPE.Percentage;
let obj = {
  name: "Percentage",
  structure: obj2,
  parse() {
    const tokenStart = this.scanner.tokenStart;
    const obj = _mod13058;
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
