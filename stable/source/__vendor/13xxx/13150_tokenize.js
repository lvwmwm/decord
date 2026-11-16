// Module ID: 13150
// Function ID: 13151
// Name: tokenize
// Dependencies: [13082, 13078]

// Module 13150 (tokenize)
import keys2 from "keys2" /* 13078 */;
import tokenize from "tokenize" /* 13082 */;

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
