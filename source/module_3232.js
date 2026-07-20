// Module ID: 3232
// Function ID: 25875
// Dependencies: []

// Module 3232
const result = _interopRequireDefault(require(dependencyMap[0]));
let obj = { ordinalNumber: require(dependencyMap[1])(obj), era: result.default({ matchPatterns: obj1, defaultMatchWidth: "wide", parsePatterns: { any: items }, defaultParseWidth: "any" }), quarter: result.default(obj2), month: result.default({ matchPatterns: obj4, defaultMatchWidth: "wide", parsePatterns: { narrow: items2, any: items3 }, defaultParseWidth: "any" }), day: result.default({ matchPatterns: obj5, defaultMatchWidth: "wide", parsePatterns: { any: items4 }, defaultParseWidth: "any" }), dayPeriod: result.default({ matchPatterns: obj6, defaultMatchWidth: "wide", parsePatterns: { any: obj7 }, defaultParseWidth: "any" }) };
obj = {
  matchPattern: /^(\d+)(\.)?/i,
  parsePattern: /\d+/i,
  valueCallback(replaced) {
    return parseInt(replaced);
  }
};
const items = [/^v/i, /^n/i];
const items1 = [/1/i, /2/i, /3/i, /4/i];
const items2 = [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i];
const items3 = [/^j[aä]/i, /^f/i, /^mär/i, /^ap/i, /^mai/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i];
const items4 = [/^so/i, /^mo/i, /^di/i, /^mi/i, /^do/i, /^f/i, /^sa/i];

export default obj;
export default exports.default;
