// Module ID: 3220
// Function ID: 25847
// Dependencies: []

// Module 3220
const result = _interopRequireDefault(require(dependencyMap[0]));
let obj = { ordinalNumber: require(dependencyMap[1])(obj), era: result.default({ matchPatterns: obj1, defaultMatchWidth: "wide", parsePatterns: { any: items }, defaultParseWidth: "any" }), quarter: result.default(obj2), month: result.default({ matchPatterns: obj4, defaultMatchWidth: "wide", parsePatterns: { narrow: items2, any: items3 }, defaultParseWidth: "any" }), day: result.default({ matchPatterns: obj5, defaultMatchWidth: "wide", parsePatterns: { narrow: items4, any: items5 }, defaultParseWidth: "any" }), dayPeriod: result.default({ matchPatterns: obj6, defaultMatchWidth: "any", parsePatterns: { any: obj7 }, defaultParseWidth: "any" }) };
obj = {
  matchPattern: /^(\d+)\.?/i,
  parsePattern: /\d+/i,
  valueCallback(replaced) {
    return parseInt(replaced, 10);
  }
};
const items = [/^p[řr]/i, /^(po|n)/i];
const items1 = [/1/i, /2/i, /3/i, /4/i];
const items2 = [/^l/i, /^[úu]/i, /^b/i, /^d/i, /^k/i, /^[čc]/i, /^[čc]/i, /^s/i, /^z/i, /^[řr]/i, /^l/i, /^p/i];
const items3 = [/^led/i, /^[úu]n/i, /^b[řr]e/i, /^dub/i, /^kv[ěe]/i, /^[čc]vn|[čc]erven(?!\w)|[čc]ervna/i, /^[čc]vc|[čc]erven(ec|ce)/i, /^srp/i, /^z[áa][řr]/i, /^[řr][íi]j/i, /^lis/i, /^pro/i];
const items4 = [/^n/i, /^p/i, /^[úu]/i, /^s/i, /^[čc]/i, /^p/i, /^s/i];
const items5 = [/^ne/i, /^po/i, /^[úu]t/i, /^st/i, /^[čc]t/i, /^p[áa]/i, /^so/i];

export default obj;
export default exports.default;
