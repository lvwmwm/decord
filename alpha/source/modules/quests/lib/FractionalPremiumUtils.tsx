// Module ID: 9704
// Function ID: 9705
// Name: FractionalPremiumUtils
// Dependencies: [2047, 1113, 7851, 4836, 1089, 2]
// Exports: getDurationStringOfFractionalPremium, getFractionalPremiumQuestRewardName, getFractionalPremiumQuestRewards

// Module 9704 (FractionalPremiumUtils)
import DurationsDefault from "Durations" /* 1089 */;
import intl3 from "intl" /* 1113 */;
import PremiumUtils from "PremiumUtils" /* 2047 */;
import DateUtils from "DateUtils" /* 4836 */;
import QuestRewardTypes from "QuestRewardTypes" /* 7851 */;
import size from "module_2" /* 2 */;

const f95405 = (type) => type.type === QuestRewardTypes.QuestRewardTypes.FRACTIONAL_PREMIUM;
const result = size.fileFinishedImporting("modules/quests/lib/FractionalPremiumUtils.tsx");

export function getDurationStringOfFractionalPremium(arr) {
  let formatToPlainStringResult;
  const obj = PremiumUtils;
  const fractionalPremiumUnitsHoursFromSkuIds = obj.getFractionalPremiumUnitsHoursFromSkuIds(arr.map((skuId) => skuId.skuId));
  if (fractionalPremiumUnitsHoursFromSkuIds % 24 === 0) {
    const intl2 = tmp(1113).intl;
    const obj2 = { days: fractionalPremiumUnitsHoursFromSkuIds / 24 };
    formatToPlainStringResult = intl2.formatToPlainString(tmp(1113).t.Cz1G97, obj2);
  } else {
    const intl = tmp(1113).intl;
    const obj3 = { hours: fractionalPremiumUnitsHoursFromSkuIds };
    formatToPlainStringResult = intl.formatToPlainString(tmp(1113).t.J9Lu4h, obj3);
  }
  return formatToPlainStringResult;
}
export function getFractionalPremiumQuestRewards(rewardsConfig) {
  const rewards = rewardsConfig.rewardsConfig.rewards;
  return rewards.filter(f95405);
}
export function getFractionalPremiumQuestRewardName(rewardsConfig) {
  let obj6;
  const rewards = rewardsConfig.rewardsConfig.rewards;
  const found = rewards.filter(f95405);
  const flatMapResult = found.flatMap((quantity) => {
    const ArrayResult = Array(quantity.quantity);
    return ArrayResult.fill(quantity.skuId);
  });
  const time = { days: intl3.t.fYmirx, hours: intl3.t["C3RO+g"], minutes: intl3.t.r77oHc };
  const obj2 = PremiumUtils;
  const fractionalPremiumUnitsHoursFromSkuIds = obj2.getFractionalPremiumUnitsHoursFromSkuIds(flatMapResult);
  const obj4 = DateUtils;
  const diffAsUnitsResult = obj4.diffAsUnits(0, fractionalPremiumUnitsHoursFromSkuIds * DurationsDefault.Millis.HOUR);
  const intl = intl3.intl;
  const formatToPlainString = intl.formatToPlainString;
  const obj = { time: obj6.unitsAsStrings(diffAsUnitsResult, time) };
  const v4SqnVD = intl3.t["4SqnVD"];
  obj6 = DateUtils;
  return formatToPlainString(v4SqnVD, obj);
}
