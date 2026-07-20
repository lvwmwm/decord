// Module ID: 3342
// Function ID: 26161
// Dependencies: []

// Module 3342
const result = _interopRequireDefault(require(dependencyMap[0]));
let obj = { ordinalNumber: require(dependencyMap[1])(obj), era: result.default({ matchPatterns: obj1, defaultMatchWidth: "wide", parsePatterns: { any: items }, defaultParseWidth: "any" }), quarter: result.default(obj2), month: result.default({ matchPatterns: obj4, defaultMatchWidth: "wide", parsePatterns: { wide: items2, any: items3 }, defaultParseWidth: "any" }), day: result.default({ matchPatterns: obj5, defaultMatchWidth: "wide", parsePatterns: { wide: items4, any: items5 }, defaultParseWidth: "any" }), dayPeriod: result.default({ matchPatterns: obj6, defaultMatchWidth: "any", parsePatterns: { any: obj7 }, defaultParseWidth: "any" }) };
obj = {
  matchPattern: /^\d+/i,
  parsePattern: /\d+/i,
  valueCallback(replaced) {
    return parseInt(replaced, 10);
  }
};
const items = [/^[bB]/i, /^(^[aA]|ค\.?ศ\.?|คริสตกาล|คริสต์ศักราช|)/i];
const items1 = [/(1|แรก|หนึ่ง)/i, /(2|สอง)/i, /(3|สาม)/i, /(4|สี่)/i];
const items2 = [/^มก/i, /^กุม/i, /^มี/i, /^เม/i, /^พฤษ/i, /^มิ/i, /^กรก/i, /^ส/i, /^กัน/i, /^ต/i, /^พฤศ/i, /^ธ/i];
const items3 = [/^ม\.?ค\.?/i, /^ก\.?พ\.?/i, /^มี\.?ค\.?/i, /^เม\.?ย\.?/i, /^พ\.?ค\.?/i, /^มิ\.?ย\.?/i, /^ก\.?ค\.?/i, /^ส\.?ค\.?/i, /^ก\.?ย\.?/i, /^ต\.?ค\.?/i, /^พ\.?ย\.?/i, /^ธ\.?ค\.?/i];
const items4 = [/^อา/i, /^จั/i, /^อั/i, /^พุธ/i, /^พฤ/i, /^ศ/i, /^เส/i];
const items5 = [/^อา/i, /^จ/i, /^อ/i, /^พ(?!ฤ)/i, /^พฤ/i, /^ศ/i, /^ส/i];

export default obj;
export default exports.default;
