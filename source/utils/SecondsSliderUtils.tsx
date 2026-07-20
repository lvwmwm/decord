// Module ID: 15364
// Function ID: 117152
// Name: getSecondsSliderLabel
// Dependencies: []
// Exports: getSecondsSliderLabel

// Module 15364 (getSecondsSliderLabel)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("utils/SecondsSliderUtils.tsx");

export const getSecondsSliderLabel = function getSecondsSliderLabel(rateLimitPerUser, arg1, intl) {
  let flag = arg1;
  let stringResult = intl;
  if (arg1 === undefined) {
    flag = true;
  }
  if (stringResult === undefined) {
    intl = require(dependencyMap[0]).intl;
    stringResult = intl.string(require(dependencyMap[0]).t.Yl1D84);
  }
  const durationResult = importDefault(dependencyMap[1]).duration(rateLimitPerUser, "seconds");
  if (durationResult.days() > 0) {
    const intl6 = require(dependencyMap[0]).intl;
    let t = require(dependencyMap[0]).t;
    t = { days: durationResult.days() };
    intl6.formatToPlainString(flag ? t.GBLpQ8 : t.k2UNz+, t);
    const tmp28 = flag ? t.GBLpQ8 : t.k2UNz+;
  } else if (durationResult.hours() > 0) {
    const intl5 = require(dependencyMap[0]).intl;
    let t1 = require(dependencyMap[0]).t;
    t1 = { hours: durationResult.hours() };
    intl5.formatToPlainString(flag ? t1.rhY1Rs : t1.xCjYxK, t1);
    const tmp22 = flag ? t1.rhY1Rs : t1.xCjYxK;
  } else if (durationResult.minutes() > 0) {
    const intl4 = require(dependencyMap[0]).intl;
    let t2 = require(dependencyMap[0]).t;
    t2 = { minutes: durationResult.minutes() };
    intl4.formatToPlainString(flag ? t2.XIGt+W : t2.iXLF9W, t2);
    const tmp16 = flag ? t2.XIGt+W : t2.iXLF9W;
  } else if (rateLimitPerUser > 0) {
    const intl3 = require(dependencyMap[0]).intl;
    let t3 = require(dependencyMap[0]).t;
    t3 = { seconds: durationResult.seconds() };
    intl3.formatToPlainString(flag ? t3.pyvjRp : t3.geSp4K, t3);
    const tmp10 = flag ? t3.pyvjRp : t3.geSp4K;
  } else {
    if (flag) {
      const intl2 = require(dependencyMap[0]).intl;
      stringResult = intl2.string(require(dependencyMap[0]).t.Yl1D84);
    }
    return stringResult;
  }
};
