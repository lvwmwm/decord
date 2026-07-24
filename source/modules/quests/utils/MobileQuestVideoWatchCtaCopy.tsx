// Module ID: 10504
// Function ID: 81280
// Name: formatWatchRemainingDurationShort
// Dependencies: [6964, 1212, 2]
// Exports: getVideoQuestWatchCtaAccessibilityLabel, getVideoQuestWatchCtaText

// Module 10504 (formatWatchRemainingDurationShort)
function formatWatchRemainingDurationShort(closure_7) {
  let obj = require(6964) /* _createForOfIteratorHelperLoose */;
  const remainingTaskTime = obj.getRemainingTaskTime(closure_7);
  const sum = 60 * remainingTaskTime.minutes + remainingTaskTime.seconds;
  if (sum >= 60) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj = {};
    const _Math = Math;
    obj.count = Math.round(sum / 60);
    let formatToPlainStringResult = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.PHhTXX, obj);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    obj = { count: sum };
    formatToPlainStringResult = intl.formatToPlainString(require(1212) /* getSystemLocale */.t.rUfeQx, obj);
  }
  return formatToPlainStringResult;
}
const result = require("set").fileFinishedImporting("modules/quests/utils/MobileQuestVideoWatchCtaCopy.tsx");

export { formatWatchRemainingDurationShort };
export const getVideoQuestWatchCtaText = function getVideoQuestWatchCtaText(closure_7) {
  const tmp2 = formatWatchRemainingDurationShort(closure_7);
  const intl = require(1212) /* getSystemLocale */.intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = require(1212) /* getSystemLocale */.t;
  if (tmp) {
    let obj = { durationShort: tmp2 };
    let formatToPlainStringResult = formatToPlainString(t["pF/deA"], obj);
  } else {
    obj = { durationShort: tmp2 };
    formatToPlainStringResult = formatToPlainString(t.CHrvqg, obj);
  }
  return formatToPlainStringResult;
};
export const getVideoQuestWatchCtaAccessibilityLabel = function getVideoQuestWatchCtaAccessibilityLabel(closure_7) {
  let minutes;
  let seconds;
  let obj = require(6964) /* _createForOfIteratorHelperLoose */;
  const remainingTaskTime = obj.getRemainingTaskTime(closure_7);
  ({ minutes, seconds } = remainingTaskTime);
  if (minutes > 0) {
    if (seconds > 0) {
      const intl3 = require(1212) /* getSystemLocale */.intl;
      obj = { minutes, seconds };
      let formatToPlainStringResult = intl3.formatToPlainString(require(1212) /* getSystemLocale */.t["lW/66D"], obj);
    }
    const intl4 = require(1212) /* getSystemLocale */.intl;
    const formatToPlainString = intl4.formatToPlainString;
    const t = require(1212) /* getSystemLocale */.t;
    if (tmp) {
      obj = { remainTime: formatToPlainStringResult };
      let formatToPlainStringResult1 = formatToPlainString(t["ch+yrN"], obj);
    } else {
      const obj1 = { remainTime: formatToPlainStringResult };
      formatToPlainStringResult1 = formatToPlainString(t.Bwc5Dg, obj1);
    }
    return formatToPlainStringResult1;
  }
  if (minutes > 0) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    const obj2 = { count: minutes };
    formatToPlainStringResult = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t["SxnF/O"], obj2);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    const obj3 = { count: seconds };
    formatToPlainStringResult = intl.formatToPlainString(require(1212) /* getSystemLocale */.t["0BZpdi"], obj3);
  }
};
