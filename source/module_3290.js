// Module ID: 3290
// Function ID: 26031
// Dependencies: [1931, 1932]

// Module 3290
import result from "result";

obj = { ordinalNumber: require("result")(obj), era: result.default({ matchPatterns: obj1, defaultMatchWidth: "wide", parsePatterns: { any: items }, defaultParseWidth: "any" }), quarter: result.default(obj2), month: result.default({ matchPatterns: obj4, defaultMatchWidth: "wide", parsePatterns: { any: items2 }, defaultParseWidth: "any" }), day: result.default({ matchPatterns: obj5, defaultMatchWidth: "wide", parsePatterns: { any: items3 }, defaultParseWidth: "any" }), dayPeriod: result.default({ matchPatterns: obj6, defaultMatchWidth: "any", parsePatterns: { any: obj7 }, defaultParseWidth: "any" }) };
obj = {
  matchPattern: /^(\d+)(일|번째)?/i,
  parsePattern: /\d+/i,
  valueCallback(replaced) {
    return parseInt(replaced, 10);
  }
};
items = [/^(bc|기원전)/i, /^(ad|서기)/i];
const items1 = [/1/i, /2/i, /3/i, /4/i];
items2 = [/^1월?$/, /^2/, /^3/, /^4/, /^5/, /^6/, /^7/, /^8/, /^9/, /^10/, /^11/, /^12/];
items3 = [/^일/, /^월/, /^화/, /^수/, /^목/, /^금/, /^토/];

export default obj;
export default exports.default;
