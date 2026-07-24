// Module ID: 3250
// Function ID: 25924
// Name: result
// Dependencies: []
// Exports: default

// Module 3250 (result)
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
let obj = { one: "alle sekunti", other: "alle {{count}} sekuntia", futureTense: futureSeconds };
obj = { one: "sekunti", other: "{{count}} sekuntia", futureTense: futureSeconds };
obj = {
  one: "puoli minuuttia",
  other: "puoli minuuttia",
  futureTense(one) {
    return "puolen minuutin";
  }
};
const obj1 = { one: "alle minuutti", other: "alle {{count}} minuuttia", futureTense: futureMinutes };
const obj2 = { one: "minuutti", other: "{{count}} minuuttia", futureTense: futureMinutes };
const obj3 = { one: "noin tunti", other: "noin {{count}} tuntia", futureTense: futureHours };
const obj4 = { one: "tunti", other: "{{count}} tuntia", futureTense: futureHours };
const obj5 = {
  one: "p\u00E4iv\u00E4",
  other: "{{count}} p\u00E4iv\u00E4\u00E4",
  futureTense: function futureDays(str) {
    return str.replace(/päivää?/, "p\u00E4iv\u00E4n");
  }
};
const obj6 = { one: "noin viikko", other: "noin {{count}} viikkoa", futureTense: futureWeeks };
const obj7 = { one: "viikko", other: "{{count}} viikkoa", futureTense: futureWeeks };
const obj8 = { one: "noin kuukausi", other: "noin {{count}} kuukautta", futureTense: futureMonths };
const obj9 = { one: "kuukausi", other: "{{count}} kuukautta", futureTense: futureMonths };
const obj10 = { one: "noin vuosi", other: "noin {{count}} vuotta", futureTense: futureYears };
const obj11 = { one: "vuosi", other: "{{count}} vuotta", futureTense: futureYears };
const obj12 = { one: "yli vuosi", other: "yli {{count}} vuotta", futureTense: futureYears };
const obj13 = { one: "l\u00E4hes vuosi", other: "l\u00E4hes {{count}} vuotta", futureTense: futureYears };
let closure_0 = { lessThanXSeconds: obj, xSeconds: obj, halfAMinute: obj, lessThanXMinutes: obj1, xMinutes: obj2, aboutXHours: obj3, xHours: obj4, xDays: obj5, aboutXWeeks: obj6, xWeeks: obj7, aboutXMonths: obj8, xMonths: obj9, aboutXYears: obj10, xYears: obj11, overXYears: obj12, almostXYears: obj13 };

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
