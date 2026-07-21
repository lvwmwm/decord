// Module ID: 3278
// Function ID: 25998
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3278 (formatDistance)
let closure_0 = { lessThanXSeconds: { "Null": -0.000000000000000000000039704669406568334, "Null": -47414552962548800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": -0.000000000000007110746142175845, "Null": -2925190990833130000000000000000000000000000000000 }, xSeconds: { -9223372036854775808: "a", 0: "isArray" }, halfAMinute: "30\u79D2", lessThanXMinutes: { "Null": null, "Null": null, "Null": null, "Null": null }, xMinutes: { -9223372036854775808: 58063872, 0: -186170880 }, aboutXHours: { -9223372036854775808: 58063616, 0: -188071424 }, xHours: { -9223372036854775808: 58059520, 0: -188136960 }, xDays: { -9223372036854775808: 58059264, 0: -187153920 }, aboutXWeeks: { -9223372036854775808: 58060544, 0: -187088384 }, xWeeks: { -9223372036854775808: 58060800, 0: -186826240 }, aboutXMonths: { -9223372036854775808: 58061056, 0: -186564096 }, xMonths: { -9223372036854775808: 58062848, 0: -186498560 }, aboutXYears: { -9223372036854775808: 58063104, 0: -188792320 }, xYears: { -9223372036854775808: 58057728, 0: -188726784 }, overXYears: { -9223372036854775808: 58057984, 0: 390939136 }, almostXYears: { -9223372036854775808: true, 0: true } };

export default function formatDistance(arg0, arg1, arg2) {
  let obj = arg2;
  if (!arg2) {
    obj = {};
  }
  if ("string" === typeof closure_0[arg0]) {
    if (!obj.addSuffix) {
      return tmp2;
    } else {
      if (!obj.comparison) {
        let text = `${tmp}前`;
      }
      text = `${tmp}後`;
    }
  } else {
    if (1 !== arg1) {
      if (obj.addSuffix) {
        if (tmp.otherWithSuffix) {
          const _String2 = String;
          let replaced = tmp.otherWithSuffix.replace("{{count}}", String(arg1));
          const str3 = tmp.otherWithSuffix;
        }
      }
      const _String = String;
      replaced = tmp.other.replace("{{count}}", String(arg1));
      const str = tmp.other;
    }
    if (!obj.addSuffix) {
      const one = tmp.one;
    }
    const oneWithSuffix = tmp.oneWithSuffix;
  }
};
export default exports.default;
