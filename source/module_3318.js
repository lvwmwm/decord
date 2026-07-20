// Module ID: 3318
// Function ID: 26098
// Dependencies: []

// Module 3318
const result = _interopRequireDefault(require(dependencyMap[0]));
let obj = { ordinalNumber: require(dependencyMap[1])(obj), era: result.default({ matchPatterns: obj1, defaultMatchWidth: "wide", parsePatterns: { any: items, wide: items1 }, defaultParseWidth: "any" }), quarter: result.default(obj2), month: result.default({ matchPatterns: obj4, defaultMatchWidth: "wide", parsePatterns: { narrow: items3, any: items4 }, defaultParseWidth: "any" }), day: result.default({ matchPatterns: obj5, defaultMatchWidth: "wide", parsePatterns: { short: items5, narrow: items6, any: items7 }, defaultParseWidth: "any" }), dayPeriod: result.default({ matchPatterns: obj6, defaultMatchWidth: "any", parsePatterns: { any: obj7 }, defaultParseWidth: "any" }) };
obj = {
  matchPattern: /^(\d+)[ºªo]?/i,
  parsePattern: /\d+/i,
  valueCallback(replaced) {
    return parseInt(replaced, 10);
  }
};
const items = [/^ac/i, /^dc/i];
const items1 = [/^antes de cristo/i, /^depois de cristo/i];
const items2 = [/1/i, /2/i, /3/i, /4/i];
const items3 = [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i];
const items4 = [/^ja/i, /^fev/i, /^mar/i, /^abr/i, /^mai/i, /^jun/i, /^jul/i, /^ago/i, /^set/i, /^out/i, /^nov/i, /^dez/i];
const items5 = [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i];
const items6 = [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i];
const items7 = [/^d/i, /^seg/i, /^t/i, /^qua/i, /^qui/i, /^sex/i, /^s[aá]b/i];

export default obj;
export default exports.default;
