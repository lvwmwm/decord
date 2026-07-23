// Module ID: 3284
// Function ID: 26016
// Dependencies: [1932, 1931]

// Module 3284
import result from "result";
import result from "result";

obj = { ordinalNumber: result.default(obj), era: result.default({ matchPatterns: obj1, defaultMatchWidth: "wide", parsePatterns: { narrow: items, any: items1 }, defaultParseWidth: "any" }), quarter: result.default(obj2), month: result.default({ matchPatterns: obj4, defaultMatchWidth: "wide", parsePatterns: { any: items3 }, defaultParseWidth: "any" }), day: result.default({ matchPatterns: obj5, defaultMatchWidth: "wide", parsePatterns: { any: items4 }, defaultParseWidth: "any" }), dayPeriod: result.default({ matchPatterns: obj6, defaultMatchWidth: "any", parsePatterns: { any: obj7 }, defaultParseWidth: "any" }) };
obj = {
  matchPattern: /^第?\d+(年|四半期|月|週|日|時|分|秒)?/i,
  parsePattern: /\d+/i,
  valueCallback(replaced) {
    return parseInt(replaced, 10);
  }
};
items = [/^B/i, /^A/i];
items1 = [/^(紀元前)/i, /^(西暦|紀元後)/i];
const items2 = [/(1|一|１)/i, /(2|二|２)/i, /(3|三|３)/i, /(4|四|４)/i];
items3 = [/^1\D/, /^2/, /^3/, /^4/, /^5/, /^6/, /^7/, /^8/, /^9/, /^10/, /^11/, /^12/];
items4 = [/^日/, /^月/, /^火/, /^水/, /^木/, /^金/, /^土/];

export default obj;
export default exports.default;
