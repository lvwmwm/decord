// Module ID: 3258
// Function ID: 25943
// Dependencies: []

// Module 3258
const result = _interopRequireDefault(require(dependencyMap[0]));
let obj = { ordinalNumber: require(dependencyMap[1])(obj), era: result.default({ matchPatterns: obj1, defaultMatchWidth: "wide", parsePatterns: { any: items }, defaultParseWidth: "any" }), quarter: result.default(obj2), month: result.default({ matchPatterns: obj4, defaultMatchWidth: "wide", parsePatterns: { narrow: items2, any: items3 }, defaultParseWidth: "any" }), day: result.default({ matchPatterns: obj5, defaultMatchWidth: "wide", parsePatterns: { narrow: items4, any: items5 }, defaultParseWidth: "any" }), dayPeriod: result.default({ matchPatterns: obj6, defaultMatchWidth: "any", parsePatterns: { any: obj7 }, defaultParseWidth: "any" }) };
obj = {
  matchPattern: /^(\d+)(ième|ère|ème|er|e)?/i,
  parsePattern: /\d+/i,
  valueCallback(replaced) {
    return parseInt(replaced);
  }
};
const items = [/^av/i, /^ap/i];
const items1 = [/1/i, /2/i, /3/i, /4/i];
const items2 = [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i];
const items3 = [/^ja/i, /^f/i, /^mar/i, /^av/i, /^ma/i, /^juin/i, /^juil/i, /^ao/i, /^s/i, /^o/i, /^n/i, /^d/i];
const items4 = [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i];
const items5 = [/^di/i, /^lu/i, /^ma/i, /^me/i, /^je/i, /^ve/i, /^sa/i];

export default obj;
export default exports.default;
