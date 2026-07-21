// Module ID: 3312
// Function ID: 26088
// Dependencies: []

// Module 3312
const result = _interopRequireDefault(require(dependencyMap[0]));
let obj = { ordinalNumber: require(dependencyMap[1])(obj), era: result.default({ matchPatterns: obj1, defaultMatchWidth: "wide", parsePatterns: { any: items }, defaultParseWidth: "any" }), quarter: result.default(obj2), month: result.default({ matchPatterns: obj4, defaultMatchWidth: "wide", parsePatterns: { narrow: items3, any: items4 }, defaultParseWidth: "any" }), day: result.default({ matchPatterns: obj5, defaultMatchWidth: "wide", parsePatterns: { narrow: items5, abbreviated: items6, any: items7 }, defaultParseWidth: "any" }), dayPeriod: result.default({ matchPatterns: obj6, defaultMatchWidth: "any", parsePatterns: { narrow: obj7, any: obj8 }, defaultParseWidth: "any" }) };
obj = {
  matchPattern: /^(\d+)?/i,
  parsePattern: /\d+/i,
  valueCallback(replaced) {
    return parseInt(replaced, 10);
  }
};
const items = [/^p/i, /^n/i];
const items1 = [/1/i, /2/i, /3/i, /4/i];
const items2 = [/^I kw/i, /^II kw/i, /^III kw/i, /^IV kw/i];
const items3 = [/^s/i, /^l/i, /^m/i, /^k/i, /^m/i, /^c/i, /^l/i, /^s/i, /^w/i, /^p/i, /^l/i, /^g/i];
const items4 = [/^st/i, /^lu/i, /^mar/i, /^k/i, /^maj/i, /^c/i, /^lip/i, /^si/i, /^w/i, /^p/i, /^lis/i, /^g/i];
const items5 = [/^n/i, /^p/i, /^w/i, /^ś/i, /^c/i, /^p/i, /^s/i];
const items6 = [/^n/i, /^po/i, /^w/i, /^(ś|s)r/i, /^c/i, /^pt/i, /^so/i];
const items7 = [/^n/i, /^po/i, /^w/i, /^(ś|s)r/i, /^c/i, /^pi/i, /^so/i];

export default obj;
export default exports.default;
