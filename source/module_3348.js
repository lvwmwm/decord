// Module ID: 3348
// Function ID: 26175
// Dependencies: []

// Module 3348
const result = _interopRequireDefault(require(dependencyMap[0]));
let obj = { ordinalNumber: require(dependencyMap[1])(obj), era: result.default({ matchPatterns: obj1, defaultMatchWidth: "wide", parsePatterns: { any: items }, defaultParseWidth: "any" }), quarter: result.default(obj2), month: result.default({ matchPatterns: obj4, defaultMatchWidth: "wide", parsePatterns: { narrow: items4, any: items5 }, defaultParseWidth: "any" }), day: result.default({ matchPatterns: obj5, defaultMatchWidth: "wide", parsePatterns: { narrow: items6, any: items7, wide: items8 }, defaultParseWidth: "any" }), dayPeriod: result.default({ matchPatterns: obj6, defaultMatchWidth: "any", parsePatterns: { any: obj7 }, defaultParseWidth: "any" }) };
obj = {
  matchPattern: /^(\d+)(\.)?/i,
  parsePattern: /\d+/i,
  valueCallback(replaced) {
    return parseInt(replaced, 10);
  }
};
const items = [/(^mö|^milattan önce)/i, /(^ms|^milattan sonra)/i];
const items1 = [/1/i, /2/i, /3/i, /4/i];
const items2 = [/1ç/i, /2ç/i, /3ç/i, /4ç/i];
const items3 = [/^(i|İ)lk çeyrek/i, /(i|İ)kinci çeyrek/i, /üçüncü çeyrek/i, /son çeyrek/i];
const items4 = [/^o/i, /^ş/i, /^m/i, /^n/i, /^m/i, /^h/i, /^t/i, /^a/i, /^e/i, /^e/i, /^k/i, /^a/i];
const items5 = [/^o/i, /^ş/i, /^mar/i, /^n/i, /^may/i, /^h/i, /^t/i, /^ağ/i, /^ey/i, /^ek/i, /^k/i, /^ar/i];
const items6 = [/^p/i, /^p/i, /^s/i, /^ç/i, /^p/i, /^c/i, /^c/i];
const items7 = [/^pz/i, /^pt/i, /^sa/i, /^ça/i, /^pe/i, /^cu/i, /^ct/i];
const items8 = [/^pazar(?!tesi)/i, /^pazartesi/i, /^salı/i, /^çarşamba/i, /^perşembe/i, /^cuma(?!rtesi)/i, /^cumartesi/i];

export default obj;
export default exports.default;
