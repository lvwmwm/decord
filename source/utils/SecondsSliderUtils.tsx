// Module ID: 15499
// Function ID: 119432
// Name: getSecondsSliderLabel
// Dependencies: [1212, 3712, 2]
// Exports: getSecondsSliderLabel

// Module 15499 (getSecondsSliderLabel)
const result = require("set").fileFinishedImporting("utils/SecondsSliderUtils.tsx");

export const getSecondsSliderLabel = function getSecondsSliderLabel(rateLimitPerUser, arg1, intl) {
  let flag = arg1;
  let stringResult = intl;
  if (arg1 === undefined) {
    flag = true;
  }
  if (stringResult === undefined) {
    intl = require(1212) /* getSystemLocale */.intl;
    stringResult = intl.string(require(1212) /* getSystemLocale */.t.Yl1D84);
  }
  const durationResult = importDefault(3712).duration(rateLimitPerUser, "seconds");
  if (durationResult.days() > 0) {
    const intl6 = require(1212) /* getSystemLocale */.intl;
    let t = require(1212) /* getSystemLocale */.t;
    t = { days: durationResult.days() };
    intl6.formatToPlainString(flag ? t.GBLpQ8 : t["k2UNz+"], t);
    const tmp28 = flag ? t.GBLpQ8 : t["k2UNz+"];
  } else if (durationResult.hours() > 0) {
    const intl5 = require(1212) /* getSystemLocale */.intl;
    let t1 = require(1212) /* getSystemLocale */.t;
    t1 = { hours: durationResult.hours() };
    intl5.formatToPlainString(flag ? t1.rhY1Rs : t1.xCjYxK, t1);
    const tmp22 = flag ? t1.rhY1Rs : t1.xCjYxK;
  } else if (durationResult.minutes() > 0) {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    let t2 = require(1212) /* getSystemLocale */.t;
    t2 = { minutes: durationResult.minutes() };
    intl4.formatToPlainString(flag ? t2["XIGt+W"] : t2.iXLF9W, t2);
    const tmp16 = flag ? t2["XIGt+W"] : t2.iXLF9W;
  } else if (rateLimitPerUser > 0) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    let t3 = require(1212) /* getSystemLocale */.t;
    t3 = { seconds: durationResult.seconds() };
    intl3.formatToPlainString(flag ? t3.pyvjRp : t3.geSp4K, t3);
    const tmp10 = flag ? t3.pyvjRp : t3.geSp4K;
  } else {
    if (flag) {
      const intl2 = require(1212) /* getSystemLocale */.intl;
      stringResult = intl2.string(require(1212) /* getSystemLocale */.t.Yl1D84);
    }
    return stringResult;
  }
};
