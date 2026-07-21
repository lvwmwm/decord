// Module ID: 3248
// Function ID: 25913
// Name: futureSeconds
// Dependencies: []
// Exports: default

// Module 3248 (futureSeconds)
function futureSeconds(str) {
  return str.replace(/sekuntia?/, "sekunnin");
}
function futureMinutes(str) {
  return str.replace(/minuuttia?/, "minuutin");
}
function futureHours(str) {
  return str.replace(/tuntia?/, "tunnin");
}
function futureWeeks(str) {
  return str.replace(/(viikko|viikkoa)/, "viikon");
}
function futureMonths(str) {
  return str.replace(/(kuukausi|kuukautta)/, "kuukauden");
}
function futureYears(str) {
  return str.replace(/(vuosi|vuotta)/, "vuoden");
}
let obj = { -9223372036854775808: "keskiy\u00F6", 0: "keskip\u00E4iv\u00E4", futureTense: futureSeconds };
obj = { -9223372036854775808: -2107572220, 0: 21185602, futureTense: futureSeconds };
obj = {
  futureTense(one) {
    return "puolen minuutin";
  }
};
const obj1 = { -9223372036854775808: null, 0: null, futureTense: futureMinutes };
const obj2 = { -9223372036854775808: true, 0: true, futureTense: futureMinutes };
const obj3 = { -9223372036854775808: null, 0: null, futureTense: futureHours };
const obj4 = { -9223372036854775808: null, 0: null, futureTense: futureHours };
const obj5 = {
  -9223372036854775808: null,
  0: null,
  futureTense: function futureDays(str) {
    return str.replace(/päivää?/, "p\u00E4iv\u00E4n");
  }
};
const obj6 = { -9223372036854775808: null, 0: null, futureTense: futureWeeks };
const obj7 = { -9223372036854775808: null, 0: null, futureTense: futureWeeks };
const obj8 = { -9223372036854775808: null, 0: null, futureTense: futureMonths };
const obj9 = { -9223372036854775808: null, 0: null, futureTense: futureMonths };
const obj10 = { -9223372036854775808: null, 0: null, futureTense: futureYears };
let closure_0 = { lessThanXSeconds: obj, xSeconds: obj, halfAMinute: obj, lessThanXMinutes: obj1, xMinutes: obj2, aboutXHours: obj3, xHours: obj4, xDays: obj5, aboutXWeeks: obj6, xWeeks: obj7, aboutXMonths: obj8, xMonths: obj9, aboutXYears: obj10, xYears: { futureTense: futureYears }, overXYears: { futureTense: futureYears }, almostXYears: { futureTense: futureYears } };

export default function formatDistance(arg0, arg1, addSuffix) {
  if (1 === arg1) {
    let one = obj.one;
  } else {
    const _String = String;
    one = obj.other.replace("{{count}}", String(arg1));
    const str = obj.other;
  }
  let tmp2 = one;
  if (null != addSuffix) {
    tmp2 = one;
    if (addSuffix.addSuffix) {
      if (!addSuffix.comparison) {
        let text = `${one} sitten`;
      }
      one = obj.futureTense(one);
      text = `${one} kuluttua`;
    }
  }
  return tmp2;
};
export default exports.default;
