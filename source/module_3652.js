// Module ID: 3652
// Function ID: 27949
// Dependencies: []

// Module 3652
const result = _interopRequireDefault(require(dependencyMap[0]));
let obj = { ordinalNumber: require(dependencyMap[1])(obj), era: result.default({ matchPatterns: obj1, defaultMatchWidth: "wide", parsePatterns: { any: items }, defaultParseWidth: "any" }), quarter: result.default(obj2), month: result.default({ matchPatterns: obj4, defaultMatchWidth: "wide", parsePatterns: { narrow: items2, any: items3 }, defaultParseWidth: "any" }), day: result.default({ matchPatterns: obj5, defaultMatchWidth: "wide", parsePatterns: { narrow: items4, any: items5 }, defaultParseWidth: "any" }), dayPeriod: result.default({ matchPatterns: obj6, defaultMatchWidth: "wide", parsePatterns: { any: obj7 }, defaultParseWidth: "any" }) };
obj = {
  matchPattern: /^(\d+)(-?(е|й|є|а|я))?/i,
  parsePattern: /\d+/i,
  valueCallback(replaced) {
    return parseInt(replaced, 10);
  }
};
const items = [/^д/i, /^н/i];
const items1 = [/1/i, /2/i, /3/i, /4/i];
const items2 = [/^с/i, /^л/i, /^б/i, /^к/i, /^т/i, /^ч/i, /^л/i, /^с/i, /^в/i, /^ж/i, /^л/i, /^г/i];
const items3 = [/^сі/i, /^лю/i, /^б/i, /^к/i, /^т/i, /^ч/i, /^лип/i, /^се/i, /^в/i, /^ж/i, /^лис/i, /^г/i];
const items4 = [/^н/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i];
const items5 = [/^н/i, /^п[он]/i, /^в/i, /^с[ер]/i, /^ч/i, /^п\W*?[ят]/i, /^с[уб]/i];

export default obj;
export default exports.default;
