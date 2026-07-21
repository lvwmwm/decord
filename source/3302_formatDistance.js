// Module ID: 3302
// Function ID: 26059
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3302 (formatDistance)
let closure_0 = { lessThanXSeconds: { -9223372036854775808: false, 0: false }, xSeconds: { -9223372036854775808: 9126831102.875006, 0: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004508498358324087 }, halfAMinute: "et halvt minutt", lessThanXMinutes: { -9223372036854775808: 1039204355, 0: 1514340355 }, xMinutes: { -9223372036854775808: "bannerFields", 0: "PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL" }, aboutXHours: { -9223372036854775808: null, 0: null }, xHours: { -9223372036854775808: "<string:4165140481>", 0: "<string:2030043498>" }, xDays: { -9223372036854775808: 2030043912, 0: 1124074248 }, aboutXWeeks: { -9223372036854775808: 1946157930, 0: 1946157930 }, xWeeks: { -9223372036854775808: "a", 0: "isArray" }, aboutXMonths: { -9223372036854775808: true, 0: true }, xMonths: { -9223372036854775808: 1240596483, 0: 1107361795 }, aboutXYears: { -9223372036854775808: "{{count}} minuty", 0: "{{count}} minut" }, xYears: { -9223372036854775808: "minuta", 0: "minut\u0119" }, overXYears: { -9223372036854775808: 1107361795, 0: 224367 }, almostXYears: {} };

export default function formatDistance(arg0, arg1, addSuffix) {
  if ("string" === typeof closure_0[arg0]) {
    let tmp5 = tmp;
    if (null != addSuffix) {
      tmp5 = tmp;
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          let text = `${tmp} siden`;
        }
        text = `om ${tmp}`;
      }
    }
    return tmp5;
  } else if (1 === arg1) {
    let one = tmp.one;
  } else {
    const _String = String;
    one = tmp.other.replace("{{count}}", String(arg1));
    const str = tmp.other;
  }
};
export default exports.default;
