// Module ID: 3248
// Function ID: 25918
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
let obj = { "Bool(false)": "HH.mm.ss zzzz", "Bool(false)": "HH.mm.ss z", futureTense: futureSeconds };
obj = { "Bool(false)": null, "Bool(false)": null, futureTense: futureSeconds };
obj = {
  "Bool(false)": 994646650676222400000000000000000000000000000000000000000000000000000000000000000000000,
  "Bool(false)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004058428749464344,
  futureTense(one) {
    return "puolen minuutin";
  }
};
const obj1 = { "Bool(false)": "<string:3944170690>", "Bool(false)": "<string:3944153090>", futureTense: futureMinutes };
const obj2 = { "Bool(false)": "isArray", "Bool(false)": "then", futureTense: futureMinutes };
const obj3 = { "Bool(false)": null, "Bool(false)": null, futureTense: futureHours };
const obj4 = { "Bool(false)": null, "Bool(false)": null, futureTense: futureHours };
const obj6 = { "Bool(false)": "ip", "Bool(false)": "keskiy\u00F6", futureTense: futureWeeks };
const obj7 = { "Bool(false)": null, "Bool(false)": null, futureTense: futureWeeks };
const obj8 = { "Bool(false)": 5753846897549609000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(false)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000014120890657649631, futureTense: futureMonths };
const obj9 = { "Bool(false)": "HappeningNowCardsDisabled", "Bool(false)": "pillIcon", futureTense: futureMonths };
const obj10 = { "Bool(false)": null, "Bool(false)": null, futureTense: futureYears };
const obj11 = { "Bool(false)": 1107297036, "Bool(false)": 197775, futureTense: futureYears };
const obj12 = { "Bool(false)": -901644286, "Bool(false)": -33553852, futureTense: futureYears };
let closure_0 = {
  lessThanXSeconds: obj,
  xSeconds: obj,
  halfAMinute: obj,
  lessThanXMinutes: obj1,
  xMinutes: obj2,
  aboutXHours: obj3,
  xHours: obj4,
  xDays: {
    futureTense: function futureDays(str) {
      return str.replace(/päivää?/, "p\u00E4iv\u00E4n");
    }
  },
  aboutXWeeks: obj6,
  xWeeks: obj7,
  aboutXMonths: obj8,
  xMonths: obj9,
  aboutXYears: obj10,
  xYears: { futureTense: futureYears },
  overXYears: obj11,
  almostXYears: obj12
};

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
