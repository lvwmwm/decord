// Module ID: 3216
// Function ID: 25843
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3216 (formatDistance)
let closure_0 = { lessThanXSeconds: { one: { "Null": 13347050055078522000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000169450407258125, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001694477300074195 }, few: { "Null": "Array", "Null": "isArray", "Null": "accessibilityRole" }, many: { "Null": "Error", "Null": "a", "Null": "isArray" } }, xSeconds: { one: { "Null": -1761606799, "Null": "a", "Null": "MessageDisplayCompact" }, few: {}, many: {} }, halfAMinute: { type: "other", other: {} }, lessThanXMinutes: { one: {}, few: {}, many: { "Null": 3, "Null": "type", "Null": "enum" } }, xMinutes: { one: { "Null": null, "Null": null, "Null": null }, few: { "Null": "r", "Null": "isArray", "Null": "accessibilityRole" }, many: { "Null": "g_vowel5", "Null": "F+x38C", "Null": "g_vowel5" } }, aboutXHours: { one: {}, few: { "Null": null, "Null": null, "Null": null }, many: {} }, xHours: { one: { "Null": null, "Null": null, "Null": null }, few: { "Null": null, "Null": null, "Null": null }, many: { "Null": null, "Null": null, "Null": null } }, xDays: { one: { "Null": null, "Null": null, "Null": null }, few: { "Null": null, "Null": null, "Null": null }, many: { "Null": null, "Null": null, "Null": null } }, aboutXWeeks: { one: { "Null": "opacity", "Null": "r", "Null": "isArray" }, few: { "Null": "rok", "Null": "p\u0159ed rokem", "Null": "za rok" }, many: { "Null": "build", "Null": "message", "Null": "v\u00EDce ne\u017E rok" } }, xWeeks: { one: { "Null": "a", "Null": "isArray", "Null": "scales" }, few: {}, many: { "Null": null, "Null": null, "Null": null } }, aboutXMonths: { one: {}, few: { "Null": null, "Null": null, "Null": null }, many: { "Null": null, "Null": "<string:28000321>", "Null": "<string:1061290240>" } }, xMonths: { one: {}, few: {}, many: {} }, aboutXYears: { one: {}, few: {}, many: { "Null": 4440210837808.581, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001451763420726906, "Null": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009919227068201119 } }, xYears: { one: { "Null": "<string:188694786>", "Null": "<string:1375797249>", "Null": "<string:1153582274>" }, few: { "Null": "{{date}} 'v' {{time}}", "Null": "{{date}} 'v' {{time}}", "Null": "{{date}}, {{time}}" }, many: {} }, overXYears: { one: {}, few: {}, many: { "Null": null, "Null": null, "Null": 48000 } }, almostXYears: { one: {}, few: { "Null": null, "Null": null, "Null": null }, many: {} } };

export default function formatDistance(arg0, arg1, addSuffix) {
  if ("other" === closure_0[arg0].type) {
    let many = tmp.other;
  } else if (1 === arg1) {
    many = tmp.one;
  } else {
    if (arg1 > 1) {
      if (arg1 < 5) {
        many = tmp.few;
      }
    }
    many = tmp.many;
  }
  addSuffix = undefined;
  if (null != addSuffix) {
    addSuffix = addSuffix.addSuffix;
  }
  if (null != addSuffix) {
    const comparison = addSuffix.comparison;
  }
  if (true === addSuffix) {
    if (-1 === comparison) {
      let str = many.past;
    }
    const _String = String;
    return str.replace("{{count}}", String(arg1));
  }
  if (true === addSuffix) {
    if (1 === comparison) {
      str = many.future;
    }
  }
  str = many.regular;
};
export default exports.default;
