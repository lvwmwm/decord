// Module ID: 11848
// Function ID: 11849
// Name: MobileQuestVideoWatchCtaCopy
// Dependencies: [5747, 8045, 1115, 11849, 2]
// Exports: getBountyWatchCtaText, getVideoQuestWatchCtaAccessibilityLabel, getVideoQuestWatchCtaText

// Module 11848 (MobileQuestVideoWatchCtaCopy)
import util from "util" /* 1115 */;
import QuestConstants from "QuestConstants" /* 5747 */;
import QuestTaskUtils from "QuestTaskUtils" /* 8045 */;
import VQRemainingTimeTruncationExperimentDefault from "VQRemainingTimeTruncationExperiment" /* 11849 */;
import size from "module_2" /* 2 */;

function formatWatchRemainingDurationShort(watchVideoTaskDetailsFromProgress, truncate) {
  const time = QuestTaskUtils.getRemainingTaskTime(watchVideoTaskDetailsFromProgress);
  let num = 60;
  truncate = 60 * time.minutes + time.seconds;
  let truncate1;
  if (truncate != null) {
    truncate1 = truncate.truncate;
  }
  if (null != truncate1 && truncate > truncate.truncate) {
    truncate = truncate.truncate;
  }
  if (truncate >= num) {
    const intl2 = tmp(1115).intl;
    tmp(1115).t;
    const t1 = { count: null };
    const _Math = Math;
    num = truncate / num;
    t1.count = Math.round(num);
    intl2.formatToPlainString(tmp4 ? t1.XTdnRd : t1.PHhTXX, t1);
    const tmp5 = tmp4 ? t1.XTdnRd : t1.PHhTXX;
  } else {
    const intl = tmp(1115).intl;
    const t = tmp(1115).t;
    const obj2 = { count: truncate };
    return intl.formatToPlainString(tmp4 ? t["spl/XS"] : t.rUfeQx, obj2);
  }
}
const QuestsExperimentLocations = QuestConstants.QuestsExperimentLocations;
const result = size.fileFinishedImporting("modules/quests/utils/MobileQuestVideoWatchCtaCopy.tsx");

export { formatWatchRemainingDurationShort };
export const getVideoQuestWatchCtaText = function getVideoQuestWatchCtaText(questTaskDetails) {
  VQRemainingTimeTruncationExperimentDefault;
  if (questTaskDetails.percentComplete > 0) {
    const intl2 = util.intl;
    const obj2 = { durationShort: formatWatchRemainingDurationShort(questTaskDetails) };
    let formatToPlainStringResult = intl2.formatToPlainString(util.t["pF/deA"], obj2);
  } else {
    const intl = util.intl;
    const obj = { durationShort: null };
    const obj3 = { truncate: tmp3 };
    obj.durationShort = formatWatchRemainingDurationShort(questTaskDetails, obj3);
    formatToPlainStringResult = intl.formatToPlainString(util.t.CHrvqg, obj);
  }
  return formatToPlainStringResult;
};
export const getBountyWatchCtaText = function getBountyWatchCtaText(watchVideoTaskDetailsFromProgress) {
  if (watchVideoTaskDetailsFromProgress.percentComplete > 0) {
    const intl2 = util.intl;
    const obj2 = { durationShort: formatWatchRemainingDurationShort(watchVideoTaskDetailsFromProgress) };
    let formatToPlainStringResult = intl2.formatToPlainString(util.t["pF/deA"], obj2);
  } else {
    const intl = util.intl;
    const obj = { durationShort: null };
    const obj3 = { truncate: null };
    obj.durationShort = formatWatchRemainingDurationShort(watchVideoTaskDetailsFromProgress, obj3);
    formatToPlainStringResult = intl.formatToPlainString(util.t.CHrvqg, obj);
  }
  return formatToPlainStringResult;
};
export const getVideoQuestWatchCtaAccessibilityLabel = function getVideoQuestWatchCtaAccessibilityLabel(questTaskDetails) {
  const remainingTaskTime = QuestTaskUtils.getRemainingTaskTime(questTaskDetails);
  ({ minutes, seconds } = remainingTaskTime);
  if (minutes > 0) {
    if (seconds > 0) {
      const intl3 = tmp2(1115).intl;
      const time = { minutes, seconds };
      let formatToPlainStringResult = intl3.formatToPlainString(tmp2(1115).t["lW/66D"], time);
    }
    const intl4 = tmp2(1115).intl;
    const formatToPlainString = intl4.formatToPlainString;
    const t = tmp2(1115).t;
    if (tmp) {
      const obj2 = { remainTime: formatToPlainStringResult };
      let formatToPlainStringResult1 = formatToPlainString(t["ch+yrN"], obj2);
    } else {
      const obj3 = { remainTime: formatToPlainStringResult };
      formatToPlainStringResult1 = formatToPlainString(t.Bwc5Dg, obj3);
    }
    return formatToPlainStringResult1;
  }
  if (minutes > 0) {
    const intl2 = tmp2(1115).intl;
    const obj4 = { count: minutes };
    formatToPlainStringResult = intl2.formatToPlainString(tmp2(1115).t["SxnF/O"], obj4);
  } else {
    const intl = tmp2(1115).intl;
    const obj5 = { count: seconds };
    formatToPlainStringResult = intl.formatToPlainString(tmp2(1115).t["0BZpdi"], obj5);
  }
};
