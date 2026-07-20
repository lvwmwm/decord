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
let obj = {
  futureTense(one) {
    return "puolen minuutin";
  }
};
obj = {
  futureTense: function futureDays(str) {
    return str.replace(/päivää?/, "p\u00E4iv\u00E4n");
  }
};
let closure_0 = { lessThanXSeconds: { futureTense: futureSeconds }, xSeconds: { futureTense: futureSeconds }, halfAMinute: obj, lessThanXMinutes: { futureTense: futureMinutes }, xMinutes: { futureTense: futureMinutes }, aboutXHours: { futureTense: futureHours }, xHours: { futureTense: futureHours }, xDays: obj, aboutXWeeks: { futureTense: futureWeeks }, xWeeks: { futureTense: futureWeeks }, aboutXMonths: { futureTense: futureMonths }, xMonths: { futureTense: futureMonths }, aboutXYears: { futureTense: futureYears }, xYears: { futureTense: futureYears }, overXYears: { futureTense: futureYears }, almostXYears: { futureTense: futureYears } };

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
