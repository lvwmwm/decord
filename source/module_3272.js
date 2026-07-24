// Module ID: 3272
// Function ID: 25986
// Dependencies: [1931, 1932]

// Module 3272
import result from "result";

obj = { ordinalNumber: require("result")(obj), era: result.default({ matchPatterns: obj1, defaultMatchWidth: "wide", parsePatterns: { narrow: items, abbreviated: items1, any: items2 }, defaultParseWidth: "any" }), quarter: result.default(obj2), month: result.default({ matchPatterns: obj4, defaultMatchWidth: "wide", parsePatterns: { narrow: items4, any: items5 }, defaultParseWidth: "any" }), day: result.default({ matchPatterns: obj5, defaultMatchWidth: "wide", parsePatterns: { narrow: items6, any: items7 }, defaultParseWidth: "any" }), dayPeriod: result.default({ matchPatterns: obj6, defaultMatchWidth: "any", parsePatterns: { any: obj7 }, defaultParseWidth: "any" }) };
obj = {
  matchPattern: /^(\d+)\.?/i,
  parsePattern: /\d+/i,
  valueCallback(replaced) {
    return parseInt(replaced, 10);
  }
};
items = [/ie/i, /isz/i];
items1 = [/^(i\.?\s?e\.?|b\s?ce)/i, /^(i\.?\s?sz\.?|c\s?e)/i];
items2 = [/előtt/i, /(szerint|i. sz.)/i];
const items3 = [/1|I$/i, /2|II$/i, /3|III/i, /4|IV/i];
items4 = [/^j/i, /^f/i, /^m/i, /^a|á/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s|sz/i, /^o/i, /^n/i, /^d/i];
items5 = [/^ja/i, /^f/i, /^már/i, /^áp/i, /^máj/i, /^jún/i, /^júl/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i];
items6 = [/^v/i, /^h/i, /^k/i, /^sz/i, /^c/i, /^p/i, /^sz/i];
items7 = [/^v/i, /^h/i, /^k/i, /^sze/i, /^c/i, /^p/i, /^szo/i];

export default obj;
export default exports.default;
