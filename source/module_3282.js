// Module ID: 3282
// Function ID: 26011
// Dependencies: []

// Module 3282
const result = _interopRequireDefault(require(dependencyMap[0]));
const result1 = _interopRequireDefault(require(dependencyMap[1]));
let obj = { ordinalNumber: result.default(obj), era: result1.default({ matchPatterns: obj1, defaultMatchWidth: "wide", parsePatterns: { narrow: items, any: items1 }, defaultParseWidth: "any" }), quarter: result1.default(obj2), month: result1.default({ matchPatterns: obj4, defaultMatchWidth: "wide", parsePatterns: { any: items3 }, defaultParseWidth: "any" }), day: result1.default({ matchPatterns: obj5, defaultMatchWidth: "wide", parsePatterns: { any: items4 }, defaultParseWidth: "any" }), dayPeriod: result1.default({ matchPatterns: obj6, defaultMatchWidth: "any", parsePatterns: { any: obj7 }, defaultParseWidth: "any" }) };
obj = {
  matchPattern: /^第?\d+(年|四半期|月|週|日|時|分|秒)?/i,
  parsePattern: /\d+/i,
  valueCallback(replaced) {
    return parseInt(replaced, 10);
  }
};
const items = [/^B/i, /^A/i];
const items1 = [/^(紀元前)/i, /^(西暦|紀元後)/i];
const items2 = [/(1|一|１)/i, /(2|二|２)/i, /(3|三|３)/i, /(4|四|４)/i];
const items3 = [/^1\D/, /^2/, /^3/, /^4/, /^5/, /^6/, /^7/, /^8/, /^9/, /^10/, /^11/, /^12/];
const items4 = [/^日/, /^月/, /^火/, /^水/, /^木/, /^金/, /^土/];

export default obj;
export default exports.default;
