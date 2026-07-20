// Module ID: 3214
// Function ID: 25832
// Dependencies: []

// Module 3214
const result = _interopRequireDefault(require(dependencyMap[0]));
let obj = { ordinalNumber: require(dependencyMap[1])(obj), era: result.default({ matchPatterns: obj1, defaultMatchWidth: "wide", parsePatterns: { any: items }, defaultParseWidth: "any" }), quarter: result.default(obj2), month: result.default({ matchPatterns: obj4, defaultMatchWidth: "wide", parsePatterns: { any: items2 }, defaultParseWidth: "any" }), day: result.default({ matchPatterns: obj5, defaultMatchWidth: "wide", parsePatterns: { narrow: items3, any: items4 }, defaultParseWidth: "any" }), dayPeriod: result.default({ matchPatterns: obj6, defaultMatchWidth: "any", parsePatterns: { any: obj7 }, defaultParseWidth: "any" }) };
obj = {
  matchPattern: /^(\d+)(-?[врмт][аи]|-?т?(ен|на)|-?(ев|ева))?/i,
  parsePattern: /\d+/i,
  valueCallback(replaced) {
    return parseInt(replaced, 10);
  }
};
const items = [/^п/i, /^н/i];
const items1 = [/1/i, /2/i, /3/i, /4/i];
const items2 = [/^я/i, /^ф/i, /^мар/i, /^ап/i, /^май/i, /^юн/i, /^юл/i, /^ав/i, /^се/i, /^окт/i, /^но/i, /^де/i];
const items3 = [/^н/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i];
const items4 = [/^н[ед]/i, /^п[он]/i, /^вт/i, /^ср/i, /^ч[ет]/i, /^п[ет]/i, /^с[ъб]/i];

export default obj;
export default exports.default;
