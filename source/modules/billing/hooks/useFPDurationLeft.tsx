// Module ID: 12272
// Function ID: 94087
// Name: roundFPCountdownUnits
// Dependencies: []
// Exports: default

// Module 12272 (roundFPCountdownUnits)
function roundFPCountdownUnits(arg0) {
  let obj = {};
  const merged = Object.assign(arg0);
  if (obj.seconds > 0) {
    obj.minutes = obj.minutes + 1;
    obj.seconds = 0;
  }
  if (60 === obj.minutes) {
    obj.hours = obj.hours + 1;
    obj.minutes = 0;
  }
  if (24 === obj.hours) {
    obj.days = obj.days + 1;
    obj.hours = 0;
  }
  if (obj.days > 0) {
    obj = {};
    if (obj.hours > 0) {
      let days = obj.days + 1;
    } else {
      days = obj.days;
    }
    obj.days = days;
    return obj;
  } else if (obj.hours > 0) {
    if (obj.minutes > 45) {
      let hours = obj.hours + 1;
    } else {
      hours = obj.hours;
    }
    if (hours > 11) {
      obj = {};
    } else {
      obj = { "Bool(true)": "angle", "Bool(true)": 180, "Bool(true)": null, "Bool(true)": 1, hours };
    }
    return obj;
  } else if (obj.minutes > 0) {
    let num5 = 0;
    if (obj.minutes > 45) {
      num5 = 1;
    }
    const obj1 = { days: 0, hours: num5 };
    let num7 = 0;
    if (1 !== num5) {
      num7 = obj.minutes;
    }
    obj1.minutes = num7;
    obj1.seconds = 0;
    return obj1;
  } else {
    let obj2 = obj;
    if (obj.seconds > 0) {
      obj2 = { "Bool(true)": 324, "Bool(true)": 187, "Bool(true)": null, "Bool(true)": "c300172c07e69fb8041898afe2aa282d" };
    }
    return obj2;
  }
}
const obj = { SHORT_TIME_LEFT: 0, [0]: "SHORT_TIME_LEFT", LONG_TIME_LEFT: 1, [1]: "LONG_TIME_LEFT", ENDS_IN: 2, [2]: "ENDS_IN", SHORT_TIME: 3, [3]: "SHORT_TIME", CREDITS_ENDS_IN: 4, [4]: "CREDITS_ENDS_IN" };
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/billing/hooks/useFPDurationLeft.tsx");

export default function useFPDurationLeft(toDate) {
  if (obj.SHORT_TIME_LEFT === arg1) {
    let obj = { days: require(dependencyMap[0]).t./wnvqA, hours: require(dependencyMap[0]).t.Jsq0XN, minutes: require(dependencyMap[0]).t.SBd+Bs };
    let tmp8 = obj;
  } else if (obj.LONG_TIME_LEFT === arg1) {
    obj = { days: require(dependencyMap[0]).t.UD5nn5, hours: require(dependencyMap[0]).t.Hg8Fee, minutes: require(dependencyMap[0]).t.XSbQZZ };
    tmp8 = obj;
  } else if (obj.ENDS_IN === arg1) {
    const obj1 = { days: require(dependencyMap[0]).t.rLqNad, hours: require(dependencyMap[0]).t.d1LvCA, minutes: require(dependencyMap[0]).t.Z2LX7K };
    tmp8 = obj1;
  } else if (obj.CREDITS_ENDS_IN === arg1) {
    const obj2 = { days: require(dependencyMap[0]).t.xQ3zuN, hours: require(dependencyMap[0]).t.SFU7QN, minutes: require(dependencyMap[0]).t.Y4FNdL };
    tmp8 = obj2;
  } else if (obj.SHORT_TIME === arg1) {
    obj = { days: require(dependencyMap[0]).t.fYmirx, hours: require(dependencyMap[0]).t.C3RO+g, minutes: require(dependencyMap[0]).t.r77oHc };
    tmp8 = obj;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Unknown messageType (" + arg1 + ") when rendering time left");
    throw error;
  }
  const tmp17 = importDefault(dependencyMap[1]);
  const tmp18 = roundFPCountdownUnits(importDefault(dependencyMap[1])(toDate.toDate(), 60000));
  require(dependencyMap[2]).unitsAsStrings(tmp18, tmp8);
};
export const CountDownMessageTypes = obj;
export { roundFPCountdownUnits };
