// Module ID: 9860
// Function ID: 9861
// Name: FractionalPremiumUtils
// Dependencies: [7996, 2176, 1113, 4965, 1089, 2]
// Exports: getFractionalPremiumQuestRewardName, getFractionalPremiumQuestRewards

// Module 9860 (FractionalPremiumUtils)
import DurationsDefault from "Durations" /* 1089 */;
import intl2 from "intl" /* 1113 */;
import PremiumUtils from "PremiumUtils" /* 2176 */;
import DateUtils from "DateUtils" /* 4965 */;
import QuestRewardTypes from "QuestRewardTypes" /* 7996 */;
import size from "module_2" /* 2 */;

const f96416 = (type) => type.type === QuestRewardTypes.QuestRewardTypes.FRACTIONAL_PREMIUM;
const result = size.fileFinishedImporting("modules/quests/lib/FractionalPremiumUtils.tsx");

export function getFractionalPremiumQuestRewards(rewardsConfig) {
  const rewards = rewardsConfig.rewardsConfig.rewards;
  return rewards.filter(f96416);
}
export function getFractionalPremiumQuestRewardName(rewardsConfig) {
  let obj6;
  const rewards = rewardsConfig.rewardsConfig.rewards;
  const found = rewards.filter(f96416);
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
