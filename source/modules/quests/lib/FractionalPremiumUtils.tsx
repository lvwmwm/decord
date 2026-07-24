// Module ID: 9503
// Function ID: 73964
// Name: getFractionalPremiumQuestRewards
// Dependencies: [3776, 1212, 6946, 3800, 664, 2]
// Exports: getDurationStringOfFractionalPremium, getFractionalPremiumQuestRewardName

// Module 9503 (getFractionalPremiumQuestRewards)
function getFractionalPremiumQuestRewards(rewardsConfig) {
  const rewards = rewardsConfig.rewardsConfig.rewards;
  return rewards.filter((type) => type.type === outer1_0(outer1_2[2]).QuestRewardTypes.FRACTIONAL_PREMIUM);
}
const result = require("QuestRewardTypes").fileFinishedImporting("modules/quests/lib/FractionalPremiumUtils.tsx");

export const getDurationStringOfFractionalPremium = function getDurationStringOfFractionalPremium(arr) {
  let obj = require(3776) /* _createForOfIteratorHelperLoose */;
  const fractionalPremiumUnitsHoursFromSkuIds = obj.getFractionalPremiumUnitsHoursFromSkuIds(arr.map((skuId) => skuId.skuId));
  if (fractionalPremiumUnitsHoursFromSkuIds % 24 === 0) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj = { days: fractionalPremiumUnitsHoursFromSkuIds / 24 };
    let formatToPlainStringResult = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.Cz1G97, obj);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    obj = { hours: fractionalPremiumUnitsHoursFromSkuIds };
    formatToPlainStringResult = intl.formatToPlainString(require(1212) /* getSystemLocale */.t.J9Lu4h, obj);
  }
  return formatToPlainStringResult;
};
export { getFractionalPremiumQuestRewards };
export const getFractionalPremiumQuestRewardName = function getFractionalPremiumQuestRewardName(config) {
  let obj = getFractionalPremiumQuestRewards(config);
  const flatMapResult = obj.flatMap((quantity) => Array(quantity.quantity).fill(quantity.skuId));
  obj = {};
  const fractionalPremiumUnitsHoursFromSkuIds = require(3776) /* _createForOfIteratorHelperLoose */.getFractionalPremiumUnitsHoursFromSkuIds(flatMapResult);
  obj.days = require(1212) /* getSystemLocale */.t.fYmirx;
  obj.hours = require(1212) /* getSystemLocale */.t["C3RO+g"];
  obj.minutes = require(1212) /* getSystemLocale */.t.r77oHc;
  const obj2 = require(3776) /* _createForOfIteratorHelperLoose */;
  const obj4 = require(3800) /* resetCache */;
  const intl = require(1212) /* getSystemLocale */.intl;
  obj = {};
  const diffAsUnitsResult = require(3800) /* resetCache */.diffAsUnits(0, fractionalPremiumUnitsHoursFromSkuIds * importDefault(664).Millis.HOUR);
  obj.time = require(3800) /* resetCache */.unitsAsStrings(diffAsUnitsResult, obj);
  return intl.formatToPlainString(require(1212) /* getSystemLocale */.t["4SqnVD"], obj);
};
