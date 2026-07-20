// Module ID: 3246
// Function ID: 25907
// Dependencies: [4067753984, 4076863500]

// Module 3246
const result = _interopRequireDefault(require(dependencyMap[0]));
const result1 = _interopRequireDefault(require(dependencyMap[1]));
let obj = { ordinalNumber: result.default(obj), era: result1.default({ matchPatterns: obj1, defaultMatchWidth: "wide", parsePatterns: { any: items, wide: items1 }, defaultParseWidth: "any" }), quarter: result1.default(obj2), month: result1.default({ matchPatterns: obj4, defaultMatchWidth: "wide", parsePatterns: { narrow: items3, any: items4 }, defaultParseWidth: "any" }), day: result1.default({ matchPatterns: obj5, defaultMatchWidth: "wide", parsePatterns: { narrow: items5, any: items6 }, defaultParseWidth: "any" }), dayPeriod: result1.default({ matchPatterns: obj6, defaultMatchWidth: "any", parsePatterns: { any: obj7 }, defaultParseWidth: "any" }) };
obj = {
  matchPattern: /^(\d+)(º)?/i,
  parsePattern: /\d+/i,
  valueCallback(replaced) {
    return parseInt(replaced, 10);
  }
};
const items = [/^ac/i, /^dc/i];
const items1 = [/^(antes de cristo|antes de la era com[uú]n)/i, /^(despu[eé]s de cristo|era com[uú]n)/i];
const items2 = [/1/i, /2/i, /3/i, /4/i];
const items3 = [/^e/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i];
const items4 = [/^en/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
const items5 = [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i];
const items6 = [/^do/i, /^lu/i, /^ma/i, /^mi/i, /^ju/i, /^vi/i, /^sa/i];

export default obj;
export default exports.default;
