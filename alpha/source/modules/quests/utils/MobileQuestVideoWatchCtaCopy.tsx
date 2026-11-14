// Module ID: 15250
// Function ID: 15251
// Name: MobileQuestVideoWatchCtaCopy
// Dependencies: [5338, 8831, 1113, 15251, 2]
// Exports: getBountyWatchCtaText, getVideoQuestWatchCtaAccessibilityLabel, getVideoQuestWatchCtaText

// Module 15250 (MobileQuestVideoWatchCtaCopy)
import intl5 from "intl" /* 1113 */;
import QuestConstants from "QuestConstants" /* 5338 */;
import QuestTaskUtils from "QuestTaskUtils" /* 8831 */;
import VQRemainingTimeTruncationExperimentDefault from "VQRemainingTimeTruncationExperiment" /* 15251 */;
import size from "module_2" /* 2 */;

function formatWatchRemainingDurationShort(percentComplete, truncate) {
  let formatToPlainString2Result;
  const obj = QuestTaskUtils;
  const time = obj.getRemainingTaskTime(percentComplete);
  truncate = 60 * time.minutes + time.seconds;
  let truncate1;
  if (truncate != null) {
    truncate1 = truncate.truncate;
  }
  if (null != truncate1 && truncate > truncate.truncate) {
    truncate = truncate.truncate;
  }
  if (truncate >= 60) {
    const intl2 = tmp(1113).intl;
    const formatToPlainString2 = intl2.formatToPlainString;
    const t2 = tmp(1113).t;
    const _Math = Math;
    const obj2 = { count: Math.round(truncate / 60) };
    const tmp6 = null != truncate1 && truncate > truncate.truncate ? t2.XTdnRd : t2.PHhTXX;
    formatToPlainString2Result = formatToPlainString2(tmp6, obj2);
  } else {
    const intl = tmp(1113).intl;
    const formatToPlainString = intl.formatToPlainString;
    const t = tmp(1113).t;
    const obj3 = { count: truncate };
    formatToPlainString2Result = formatToPlainString(tmp4 ? t["spl/XS"] : t.rUfeQx, obj3);
  }
  return formatToPlainString2Result;
}
function getWatchCtaText(percentComplete, hideDuration) {
  let formatToPlainStringResult;
  let obj3;
  let flag = hideDuration.hideDuration;
  const truncateMoreThanSeconds = hideDuration.truncateMoreThanSeconds;
  if (flag === undefined) {
    flag = false;
  }
  const intl = intl5.intl;
  if (flag) {
    let stringResult;
    const string = intl.string;
    const t2 = tmp2(1113).t;
    if (percentComplete.percentComplete > 0) {
      stringResult = string(t2.pk9XKF);
    } else {
      stringResult = string(t2.kfks9Y);
    }
    formatToPlainStringResult = stringResult;
  } else {
    const formatToPlainString = intl.formatToPlainString;
    const t = tmp2(1113).t;
    if (percentComplete.percentComplete > 0) {
      const prop = t["pF/deA"];
      const obj2 = { durationShort: formatWatchRemainingDurationShort(percentComplete) };
      formatToPlainStringResult = formatToPlainString(prop, obj2);
    } else {
      const obj = { durationShort: formatWatchRemainingDurationShort(percentComplete, obj3) };
      const CHrvqg = t.CHrvqg;
      obj3 = { truncate: truncateMoreThanSeconds };
      formatToPlainStringResult = formatToPlainString(CHrvqg, obj);
    }
  }
  return formatToPlainStringResult;
}
const QuestsExperimentLocations = QuestConstants.QuestsExperimentLocations;
const result = size.fileFinishedImporting("modules/quests/utils/MobileQuestVideoWatchCtaCopy.tsx");

export { formatWatchRemainingDurationShort };
export function getVideoQuestWatchCtaText(questTaskDetails) {
  let obj2;
  let obj3;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const obj = { truncateMoreThanSeconds: obj2.getConfig(obj3).truncateMoreThanSeconds, hideDuration: flag };
  obj2 = VQRemainingTimeTruncationExperimentDefault;
  obj3 = { location: QuestsExperimentLocations.QUESTS_CARD };
  return getWatchCtaText(questTaskDetails, obj);
}
export function getBountyWatchCtaText(watchVideoTaskDetailsFromProgress) {
  return getWatchCtaText(watchVideoTaskDetailsFromProgress, { truncateMoreThanSeconds: null });
}
export function getVideoQuestWatchCtaAccessibilityLabel(questTaskDetails) {
  let formatToPlainStringResult;
  let minutes;
  let seconds;
  const tmp = questTaskDetails.percentComplete > 0;
  const obj = QuestTaskUtils;
  const remainingTaskTime = obj.getRemainingTaskTime(questTaskDetails);
  ({ minutes, seconds } = remainingTaskTime);
  if (minutes > 0) {
    let formatToPlainStringResult1;
    if (seconds > 0) {
      const intl3 = tmp2(1113).intl;
      const time = { minutes, seconds };
      formatToPlainStringResult = intl3.formatToPlainString(tmp2(1113).t["lW/66D"], time);
    }
    const intl4 = tmp2(1113).intl;
    const formatToPlainString = intl4.formatToPlainString;
    const t = tmp2(1113).t;
    if (tmp) {
      const obj2 = { remainTime: formatToPlainStringResult };
      formatToPlainStringResult1 = formatToPlainString(t["ch+yrN"], obj2);
    } else {
      const obj3 = { remainTime: formatToPlainStringResult };
      formatToPlainStringResult1 = formatToPlainString(t.Bwc5Dg, obj3);
    }
    return formatToPlainStringResult1;
  }
  if (minutes > 0) {
    const intl2 = tmp2(1113).intl;
    const obj4 = { count: minutes };
    formatToPlainStringResult = intl2.formatToPlainString(tmp2(1113).t["SxnF/O"], obj4);
  } else {
    const intl = tmp2(1113).intl;
    const obj5 = { count: seconds };
    formatToPlainStringResult = intl.formatToPlainString(tmp2(1113).t["0BZpdi"], obj5);
  }
}
