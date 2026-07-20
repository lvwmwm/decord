// Module ID: 3216
// Function ID: 25838
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3216 (formatDistance)
let closure_0 = { lessThanXSeconds: { one: {}, few: {}, many: {} }, xSeconds: { one: {}, few: {}, many: {} }, halfAMinute: { type: "other", other: {} }, lessThanXMinutes: { one: {}, few: {}, many: {} }, xMinutes: { one: {}, few: {}, many: {} }, aboutXHours: { one: {}, few: {}, many: {} }, xHours: { one: {}, few: {}, many: {} }, xDays: { one: {}, few: {}, many: {} }, aboutXWeeks: { one: {}, few: {}, many: {} }, xWeeks: { one: {}, few: {}, many: {} }, aboutXMonths: { one: {}, few: {}, many: {} }, xMonths: { one: {}, few: {}, many: {} }, aboutXYears: { one: {}, few: {}, many: {} }, xYears: { one: {}, few: {}, many: {} }, overXYears: { one: {}, few: {}, many: {} }, almostXYears: { one: {}, few: {}, many: {} } };

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
