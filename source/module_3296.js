// Module ID: 3296
// Function ID: 26050
// Dependencies: [1931, 1932]

// Module 3296
import result from "result";

obj = { ordinalNumber: require("result")(obj), era: result.default({ matchPatterns: obj1, defaultMatchWidth: "wide", parsePatterns: { wide: items, any: items1 }, defaultParseWidth: "any" }), quarter: result.default(obj2), month: result.default({ matchPatterns: obj4, defaultMatchWidth: "wide", parsePatterns: { narrow: items4, any: items5 }, defaultParseWidth: "any" }), day: result.default({ matchPatterns: obj5, defaultMatchWidth: "wide", parsePatterns: { narrow: items6, wide: items7, any: items8 }, defaultParseWidth: "any" }), dayPeriod: result.default({ matchPatterns: obj6, defaultMatchWidth: "any", parsePatterns: { narrow: obj7, any: obj8 }, defaultParseWidth: "any" }) };
obj = {
  matchPattern: /^(\d+)(-oji)?/i,
  parsePattern: /\d+/i,
  valueCallback(replaced) {
    return parseInt(replaced, 10);
  }
};
items = [/prieš/i, /(po|mūsų)/i];
items1 = [/^pr/i, /^(po|m)/i];
const items2 = [/1/i, /2/i, /3/i, /4/i];
const items3 = [/I$/i, /II$/i, /III/i, /IV/i];
items4 = [/^s/i, /^v/i, /^k/i, /^b/i, /^g/i, /^b/i, /^l/i, /^r/i, /^r/i, /^s/i, /^l/i, /^g/i];
items5 = [/^saus/i, /^vas/i, /^kov/i, /^bal/i, /^geg/i, /^birž/i, /^liep/i, /^rugp/i, /^rugs/i, /^spal/i, /^lapkr/i, /^gruod/i];
items6 = [/^s/i, /^p/i, /^a/i, /^t/i, /^k/i, /^p/i, /^š/i];
items7 = [/^se/i, /^pi/i, /^an/i, /^tr/i, /^ke/i, /^pe/i, /^še/i];
items8 = [/^sk/i, /^pr/i, /^an/i, /^tr/i, /^kt/i, /^pn/i, /^št/i];

export default obj;
export default exports.default;
