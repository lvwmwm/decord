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
let obj = { removeInternalFields: "isArray", ga: "Reflect", futureTense: futureSeconds };
obj = { removeInternalFields: null, ga: null, futureTense: futureSeconds };
obj = {
  futureTense(one) {
    return "puolen minuutin";
  }
};
const obj1 = { removeInternalFields: false, ga: false, futureTense: futureHours };
const obj2 = { removeInternalFields: true, ga: true, futureTense: futureHours };
const obj4 = { removeInternalFields: null, ga: null, futureTense: futureWeeks };
const obj5 = { removeInternalFields: null, ga: null, futureTense: futureWeeks };
const obj6 = { removeInternalFields: "ip", ga: "keskiy\u00F6ll\u00E4", futureTense: futureMonths };
const obj7 = { removeInternalFields: null, ga: null, futureTense: futureMonths };
const obj8 = { removeInternalFields: "moins d\u2019une seconde", ga: "moins de {{count}} secondes", futureTense: futureYears };
const obj9 = { removeInternalFields: "1 seconde", ga: "{{count}} secondes", futureTense: futureYears };
const obj10 = { removeInternalFields: "moins d\u2019une minute", ga: "moins de {{count}} minutes", futureTense: futureYears };
let closure_0 = {
  lessThanXSeconds: obj,
  xSeconds: obj,
  halfAMinute: obj,
  lessThanXMinutes: { futureTense: futureMinutes },
  xMinutes: { futureTense: futureMinutes },
  aboutXHours: obj1,
  xHours: obj2,
  xDays: {
    futureTense: function futureDays(str) {
      return str.replace(/päivää?/, "p\u00E4iv\u00E4n");
    }
  },
  aboutXWeeks: obj4,
  xWeeks: obj5,
  aboutXMonths: obj6,
  xMonths: obj7,
  aboutXYears: { futureTense: futureYears },
  xYears: obj8,
  overXYears: obj9,
  almostXYears: obj10
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
