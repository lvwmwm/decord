// Module ID: 3324
// Function ID: 26112
// Dependencies: []

// Module 3324
const result = _interopRequireDefault(require(dependencyMap[0]));
let obj = { ordinalNumber: require(dependencyMap[1])(obj), era: result.default({ matchPatterns: obj1, defaultMatchWidth: "wide", parsePatterns: { any: items, wide: items1 }, defaultParseWidth: "any" }), quarter: result.default(obj2), month: result.default({ matchPatterns: obj4, defaultMatchWidth: "wide", parsePatterns: { narrow: items3, any: items4 }, defaultParseWidth: "any" }), day: result.default({ matchPatterns: obj5, defaultMatchWidth: "wide", parsePatterns: { narrow: items5, any: items6 }, defaultParseWidth: "any" }), dayPeriod: result.default({ matchPatterns: obj6, defaultMatchWidth: "any", parsePatterns: { any: obj7 }, defaultParseWidth: "any" }) };
obj = {
  matchPattern: /^(\d+)?/i,
  parsePattern: /\d+/i,
  valueCallback(replaced) {
    return parseInt(replaced, 10);
  }
};
const items = [/^ÎC/i, /^DC/i];
const items1 = [/^(Înainte de Cristos|Înaintea erei noastre)/i, /^(După Cristos|Era noastră)/i];
const items2 = [/1/i, /2/i, /3/i, /4/i];
const items3 = [/^i/i, /^f/i, /^m/i, /^a/i, /^m/i, /^i/i, /^i/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i];
const items4 = [/^ia/i, /^f/i, /^mar/i, /^ap/i, /^mai/i, /^iun/i, /^iul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i];
const items5 = [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i];
const items6 = [/^d/i, /^l/i, /^ma/i, /^mi/i, /^j/i, /^v/i, /^s/i];

export default obj;
export default exports.default;
