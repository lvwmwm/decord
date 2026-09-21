// Module ID: 10579
// Function ID: 10580
// Name: FractionalPremiumUtils
// Dependencies: [4418, 1119, 7949, 4442, 1095, 2]
// Exports: getDurationStringOfFractionalPremium, getFractionalPremiumQuestRewardName, getFractionalPremiumQuestRewards

// Module 10579 (FractionalPremiumUtils)
import DurationsDefault from "Durations" /* 1095 */;
import util from "util" /* 1119 */;
import PremiumUtils from "PremiumUtils" /* 4418 */;
import DateUtils from "DateUtils" /* 4442 */;
import QuestRewardTypes from "QuestRewardTypes" /* 7949 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/lib/FractionalPremiumUtils.tsx");

export const getDurationStringOfFractionalPremium = function getDurationStringOfFractionalPremium(arr) {
  const fractionalPremiumUnitsHoursFromSkuIds = PremiumUtils.getFractionalPremiumUnitsHoursFromSkuIds(arr.map((skuId) => skuId.skuId));
  if (fractionalPremiumUnitsHoursFromSkuIds % 24 === 0) {
    const intl2 = tmp(1119).intl;
    const obj2 = { days: fractionalPremiumUnitsHoursFromSkuIds / 24 };
    let formatToPlainStringResult = intl2.formatToPlainString(tmp(1119).t.Cz1G97, obj2);
  } else {
    const intl = tmp(1119).intl;
    const obj3 = { hours: fractionalPremiumUnitsHoursFromSkuIds };
    formatToPlainStringResult = intl.formatToPlainString(tmp(1119).t.J9Lu4h, obj3);
  }
  return formatToPlainStringResult;
};
export const getFractionalPremiumQuestRewards = function getFractionalPremiumQuestRewards(rewardsConfig) {
  const rewards = rewardsConfig.rewardsConfig.rewards;
  return rewards.filter((type) => type.type === QuestRewardTypes.QuestRewardTypes.FRACTIONAL_PREMIUM);
};
export const getFractionalPremiumQuestRewardName = function getFractionalPremiumQuestRewardName(rewardsConfig) {
  const rewards = rewardsConfig.rewardsConfig.rewards;
  const found = rewards.filter((type) => type.type === QuestRewardTypes.QuestRewardTypes.FRACTIONAL_PREMIUM);
  const flatMapResult = found.flatMap((quantity) => Array(quantity.quantity).fill(quantity.skuId));
  const time = { days: null, hours: null, minutes: null };
  const fractionalPremiumUnitsHoursFromSkuIds = PremiumUtils.getFractionalPremiumUnitsHoursFromSkuIds(flatMapResult);
  time.days = util.t.fYmirx;
  time.hours = util.t["C3RO+g"];
  time.minutes = util.t.r77oHc;
  const intl = util.intl;
  const obj = { time: null };
  const diffAsUnitsResult = DateUtils.diffAsUnits(0, fractionalPremiumUnitsHoursFromSkuIds * DurationsDefault.Millis.HOUR);
  obj.time = DateUtils.unitsAsStrings(diffAsUnitsResult, time);
  return intl.formatToPlainString(util.t["4SqnVD"], obj);
};
