// Module ID: 13899
// Function ID: 13900
// Name: tokenize
// Dependencies: [13831, 13827]

// Module 13899 (tokenize)
import keys2 from "keys2" /* 13827 */;
import tokenize from "tokenize" /* 13831 */;

let obj2;
const Percentage = tokenize.TYPE.Percentage;
let obj = {
  name: "Percentage",
  structure: obj2,
  parse() {
    const tokenStart = this.scanner.tokenStart;
    const obj = keys2;
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
