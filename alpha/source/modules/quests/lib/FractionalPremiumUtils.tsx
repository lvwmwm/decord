// Module ID: 9981
// Function ID: 9982
// Name: FractionalPremiumUtils
// Dependencies: [8409, 2173, 1112, 4735, 1088, 2]
// Exports: getFractionalPremiumQuestRewardName, getFractionalPremiumQuestRewards

// Module 9981 (FractionalPremiumUtils)
import DurationsDefault from "Durations" /* 1088 */;
import intl2 from "intl" /* 1112 */;
import PremiumUtils from "PremiumUtils" /* 2173 */;
import DateUtils from "DateUtils" /* 4735 */;
import QuestRewardTypes from "QuestRewardTypes" /* 8409 */;
import size from "module_2" /* 2 */;

const f96336 = (type) => type.type === QuestRewardTypes.QuestRewardTypes.FRACTIONAL_PREMIUM;
const result = size.fileFinishedImporting("modules/quests/lib/FractionalPremiumUtils.tsx");

export function getFractionalPremiumQuestRewards(rewardsConfig) {
  const rewards = rewardsConfig.rewardsConfig.rewards;
  return rewards.filter(f96336);
}
export function getFractionalPremiumQuestRewardName(rewardsConfig) {
  let obj6;
  const rewards = rewardsConfig.rewardsConfig.rewards;
  const found = rewards.filter(f96336);
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
