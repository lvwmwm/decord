// Module ID: 12386
// Function ID: 96238
// Name: roundFPCountdownUnits
// Dependencies: [1212, 6678, 3800, 1184, 2]
// Exports: default

// Module 12386 (roundFPCountdownUnits)
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
    obj = { days: null, hours: 0, minutes: 0, seconds: 0 };
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
      obj = { days: 1, hours: 0, minutes: 0, seconds: 0 };
    } else {
      obj = { days: 0, hours, minutes: 0, seconds: 0 };
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
      obj2 = { days: 0, hours: 0, minutes: 1, seconds: 0 };
    }
    return obj2;
  }
}
let obj = { SHORT_TIME_LEFT: 0, [0]: "SHORT_TIME_LEFT", LONG_TIME_LEFT: 1, [1]: "LONG_TIME_LEFT", ENDS_IN: 2, [2]: "ENDS_IN", SHORT_TIME: 3, [3]: "SHORT_TIME", CREDITS_ENDS_IN: 4, [4]: "CREDITS_ENDS_IN" };
const result = require("resetCache").fileFinishedImporting("modules/billing/hooks/useFPDurationLeft.tsx");

export default function useFPDurationLeft(toDate) {
  if (obj.SHORT_TIME_LEFT === arg1) {
    obj = { days: require(1212) /* getSystemLocale */.t["/wnvqA"], hours: require(1212) /* getSystemLocale */.t.Jsq0XN, minutes: require(1212) /* getSystemLocale */.t["SBd+Bs"] };
    let tmp8 = obj;
  } else if (obj.LONG_TIME_LEFT === arg1) {
    obj = { days: require(1212) /* getSystemLocale */.t.UD5nn5, hours: require(1212) /* getSystemLocale */.t.Hg8Fee, minutes: require(1212) /* getSystemLocale */.t.XSbQZZ };
    tmp8 = obj;
  } else if (obj.ENDS_IN === arg1) {
    const obj1 = { days: require(1212) /* getSystemLocale */.t.rLqNad, hours: require(1212) /* getSystemLocale */.t.d1LvCA, minutes: require(1212) /* getSystemLocale */.t.Z2LX7K };
    tmp8 = obj1;
  } else if (obj.CREDITS_ENDS_IN === arg1) {
    const obj2 = { days: require(1212) /* getSystemLocale */.t.xQ3zuN, hours: require(1212) /* getSystemLocale */.t.SFU7QN, minutes: require(1212) /* getSystemLocale */.t.Y4FNdL };
    tmp8 = obj2;
  } else if (obj.SHORT_TIME === arg1) {
    obj = { days: require(1212) /* getSystemLocale */.t.fYmirx, hours: require(1212) /* getSystemLocale */.t["C3RO+g"], minutes: require(1212) /* getSystemLocale */.t.r77oHc };
    tmp8 = obj;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Unknown messageType (" + arg1 + ") when rendering time left");
    throw error;
  }
  const tmp17 = importDefault(6678);
  const tmp18 = roundFPCountdownUnits(importDefault(6678)(toDate.toDate(), 60000));
  require(3800) /* resetCache */.unitsAsStrings(tmp18, tmp8);
};
export const CountDownMessageTypes = obj;
export { roundFPCountdownUnits };
