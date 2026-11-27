// Module ID: 9913
// Function ID: 9914
// Name: FractionalPremiumUtils
// Dependencies: [8372, 2174, 1112, 4865, 1088, 2]
// Exports: getFractionalPremiumQuestRewardName, getFractionalPremiumQuestRewards

// Module 9913 (FractionalPremiumUtils)
import DurationsDefault from "Durations" /* 1088 */;
import intl2 from "intl" /* 1112 */;
import PremiumUtils from "PremiumUtils" /* 2174 */;
import DateUtils from "DateUtils" /* 4865 */;
import QuestRewardTypes from "QuestRewardTypes" /* 8372 */;
import size from "module_2" /* 2 */;

const f96840 = (type) => type.type === QuestRewardTypes.QuestRewardTypes.FRACTIONAL_PREMIUM;
const result = size.fileFinishedImporting("modules/quests/lib/FractionalPremiumUtils.tsx");

export function getFractionalPremiumQuestRewards(rewardsConfig) {
  const rewards = rewardsConfig.rewardsConfig.rewards;
  return rewards.filter(f96840);
}
export function getFractionalPremiumQuestRewardName(rewardsConfig) {
  let obj6;
  const rewards = rewardsConfig.rewardsConfig.rewards;
  const found = rewards.filter(f96840);
  const flatMapResult = found.flatMap((quantity) => {
    const ArrayResult = Array(quantity.quantity);
    return ArrayResult.fill(quantity.skuId);
  });
  const time = { days: intl2.t.fYmirx, hours: intl2.t["C3RO+g"], minutes: intl2.t.r77oHc };
  const obj2 = PremiumUtils;
  const fractionalPremiumUnitsHoursFromSkuIds = obj2.getFractionalPremiumUnitsHoursFromSkuIds(flatMapResult);
  const obj4 = DateUtils;
  const diffAsUnitsResult = obj4.diffAsUnits(0, fractionalPremiumUnitsHoursFromSkuIds * DurationsDefault.Millis.HOUR);
  const intl = intl2.intl;
  const formatToPlainString = intl.formatToPlainString;
  const obj = { time: obj6.unitsAsStrings(diffAsUnitsResult, time) };
  const v4SqnVD = intl2.t["4SqnVD"];
  obj6 = DateUtils;
  return formatToPlainString(v4SqnVD, obj);
}
