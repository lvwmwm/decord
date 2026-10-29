// Module ID: 9659
// Function ID: 9660
// Name: FractionalPremiumUtils
// Dependencies: [2051, 1125, 7839, 4830, 1101, 2]
// Exports: getDurationStringOfFractionalPremium, getFractionalPremiumQuestRewardName, getFractionalPremiumQuestRewards

// Module 9659 (FractionalPremiumUtils)
import DurationsDefault from "Durations" /* 1101 */;
import intl3 from "intl" /* 1125 */;
import PremiumUtils from "PremiumUtils" /* 2051 */;
import DateUtils from "DateUtils" /* 4830 */;
import QuestRewardTypes from "QuestRewardTypes" /* 7839 */;
import size from "module_2" /* 2 */;

const f106224 = (type) => type.type === QuestRewardTypes.QuestRewardTypes.FRACTIONAL_PREMIUM;
const result = size.fileFinishedImporting("modules/quests/lib/FractionalPremiumUtils.tsx");

export function getDurationStringOfFractionalPremium(arr) {
  let formatToPlainStringResult;
  const obj = PremiumUtils;
  const fractionalPremiumUnitsHoursFromSkuIds = obj.getFractionalPremiumUnitsHoursFromSkuIds(arr.map((skuId) => skuId.skuId));
  if (fractionalPremiumUnitsHoursFromSkuIds % 24 === 0) {
    const intl2 = tmp(1125).intl;
    const obj2 = { days: fractionalPremiumUnitsHoursFromSkuIds / 24 };
    formatToPlainStringResult = intl2.formatToPlainString(tmp(1125).t.Cz1G97, obj2);
  } else {
    const intl = tmp(1125).intl;
    const obj3 = { hours: fractionalPremiumUnitsHoursFromSkuIds };
    formatToPlainStringResult = intl.formatToPlainString(tmp(1125).t.J9Lu4h, obj3);
  }
  return formatToPlainStringResult;
}
export function getFractionalPremiumQuestRewards(rewardsConfig) {
  const rewards = rewardsConfig.rewardsConfig.rewards;
  return rewards.filter(f106224);
}
export function getFractionalPremiumQuestRewardName(rewardsConfig) {
  let obj6;
  const rewards = rewardsConfig.rewardsConfig.rewards;
  const found = rewards.filter(f106224);
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
