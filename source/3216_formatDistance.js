// Module ID: 3216
// Function ID: 25838
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3216 (formatDistance)
let closure_0 = { lessThanXSeconds: { one: { "Null": 127923915675736520000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": -2569262153030452000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": 563133278060654 }, few: { "Null": -352321195, "Null": 2013266800, "Null": 1124073813 }, many: { "Null": 1894449155, "Null": 620625923, "Null": 188940291 } }, xSeconds: { one: { "Null": null, "Null": null, "Null": null }, few: {}, many: {} }, halfAMinute: { type: "other", other: {} }, lessThanXMinutes: { one: {}, few: {}, many: { "Null": 3, "Null": "type", "Null": "enum" } }, xMinutes: { one: { "Null": null, "Null": null, "Null": null }, few: { "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011741662628594635, "Null": -47418896695204430000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000018696855184266 }, many: { "Null": 1894711299, "Null": 1897463811, "Null": 3 } }, aboutXHours: { one: {}, few: { "Null": null, "Null": null, "Null": null }, many: { "Null": false, "Null": false, "Null": false } }, xHours: { one: { "Null": null, "Null": null, "Null": null }, few: { "Null": null, "Null": null, "Null": null }, many: { "Null": null, "Null": null, "Null": null } }, xDays: { one: { "Null": null, "Null": null, "Null": null }, few: { "Null": null, "Null": null, "Null": null }, many: {} }, aboutXWeeks: { one: { "Null": 838860800, "Null": -889552896, "Null": -1019217549 }, few: { "Null": null, "Null": null, "Null": null }, many: {} }, xWeeks: { one: {}, few: { "Null": "a", "Null": "isArray", "Null": "useRef" }, many: {} }, aboutXMonths: { one: { "Null": "v\u00EDce ne\u017E {{count}} rok\u016F", "Null": "p\u0159ed v\u00EDce ne\u017E {{count}} roky", "Null": "za v\u00EDce ne\u017E {{count}} rok\u016F" }, few: { "Null": "skoro rok", "Null": "skoro p\u0159ed rokem", "Null": "skoro za rok" }, many: {} }, xMonths: { one: {}, few: {}, many: {} }, aboutXYears: { one: {}, few: { "Null": "dop.", "Null": "odp.", "Null": "p\u016Flnoc" }, many: { "Null": "r", "Null": "isArray", "Null": "apply" } }, xYears: { one: { "Null": null, "Null": null, "Null": null }, few: {}, many: {} }, overXYears: { one: { "Null": "<string:142754304>", "Null": "<string:3358654465>", "Null": "<string:1531052034>" }, few: { "Null": "C", "Null": "fullHeightContentContainer", "Null": "IO" }, many: { "Null": "<string:3175219202>", "Null": "<string:1308623363>", "Null": "<string:1107296944>" } }, almostXYears: { one: { "Null": "cirka 1 uge", "Null": "cirka {{count}} uger", "Null": "1 uge" }, few: {}, many: {} } };

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
