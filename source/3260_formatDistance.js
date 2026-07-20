// Module ID: 3260
// Function ID: 25949
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3260 (formatDistance)
let obj = { -2080833532: true, -615448572: true, -2080750445: true, one: {} };
obj = { -2080833532: 48800147407211900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -615448572: 2569727410487266000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -2080750445: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000183890596904654, one: {} };
obj = { -2080833532: "{{date}} 'u' {{time}}", -615448572: "{{date}} 'u' {{time}}", -2080750445: "{{date}} {{time}}", one: {} };
const obj1 = { -2080833532: false, -615448572: true, -2080750445: true, one: {} };
const obj2 = { -2080833532: 1, -615448572: "AM", -2080750445: "PM", one: {} };
const obj3 = { -2080833532: null, -615448572: null, -2080750445: null, one: {} };
const obj4 = { -2080833532: null, -615448572: null, -2080750445: null, one: {} };
const obj5 = { -2080833532: " m\u00E1sodperccel ezel\u0151tt", -615448572: " m\u00E1sodperc m\u00FAlva", -2080750445: " m\u00E1sodperce", one: {} };
const obj6 = { -2080833532: "a", -615448572: "addMembersContainer", -2080750445: "global", one: {} };
let closure_0 = { lessThanXSeconds: obj, xSeconds: { one: {} }, halfAMinute: "pola minute", lessThanXMinutes: { one: {} }, xMinutes: obj, aboutXHours: { one: {} }, xHours: obj, xDays: obj1, aboutXWeeks: obj2, xWeeks: { one: {} }, aboutXMonths: obj3, xMonths: { one: {} }, aboutXYears: obj4, xYears: obj5, overXYears: obj6, almostXYears: { one: {} } };

export default function formatDistance(arg0, arg1, addSuffix) {
  let one;
  let withPrepositionIn;
  one = closure_0[arg0];
  if ("string" === typeof one) {
    let tmp7 = one;
    if (null != addSuffix) {
      tmp7 = one;
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          let text = `prije ${one}`;
        }
        text = `za ${one}`;
      }
    }
    return tmp7;
  } else {
    if (1 !== arg1) {
      if (arg1 % 10 > 1) {
        if (arg1 % 10 < 5) {
          const _String = String;
          if ("1" !== str.substr(-2, 1)) {
            const _String3 = String;
            let replaced = one.dual.replace("{{count}}", String(arg1));
            const str5 = one.dual;
          }
          const str = String(arg1);
        }
      }
      const _String2 = String;
      replaced = one.other.replace("{{count}}", String(arg1));
      const str3 = one.other;
    }
    if (null == addSuffix) {
      const standalone = one.one.standalone;
    }
    if (!addSuffix.comparison) {
      const withPrepositionAgo = one.one.withPrepositionAgo;
    }
    ({ one, withPrepositionIn } = one);
  }
};
export default exports.default;
