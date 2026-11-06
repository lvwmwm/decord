// Module ID: 13083
// Function ID: 13084
// Name: tokenize
// Dependencies: [13027, 13023]

// Module 13083 (tokenize)
import keys2 from "keys2" /* 13023 */;
import tokenize from "tokenize" /* 13027 */;

let obj2;
const Dimension = tokenize.TYPE.Dimension;
let obj = {
  name: "Dimension",
  structure: obj2,
  parse() {
    const tokenStart = this.scanner.tokenStart;
    const obj = keys2;
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
