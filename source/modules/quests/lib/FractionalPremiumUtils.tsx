// Module ID: 9460
// Function ID: 73714
// Name: getFractionalPremiumQuestRewards
// Dependencies: []
// Exports: getDurationStringOfFractionalPremium, getFractionalPremiumQuestRewardName

// Module 9460 (getFractionalPremiumQuestRewards)
function getFractionalPremiumQuestRewards(rewardsConfig) {
  const rewards = rewardsConfig.rewardsConfig.rewards;
  return rewards.filter((type) => type.type === callback(closure_2[2]).QuestRewardTypes.FRACTIONAL_PREMIUM);
}
const _module = require(dependencyMap[5]);
const result = _module.fileFinishedImporting("modules/quests/lib/FractionalPremiumUtils.tsx");

export const getDurationStringOfFractionalPremium = function getDurationStringOfFractionalPremium(arr) {
  let obj = require(dependencyMap[0]);
  const fractionalPremiumUnitsHoursFromSkuIds = obj.getFractionalPremiumUnitsHoursFromSkuIds(arr.map((skuId) => skuId.skuId));
  if (fractionalPremiumUnitsHoursFromSkuIds % 24 === 0) {
    const intl2 = require(dependencyMap[1]).intl;
    obj = { days: fractionalPremiumUnitsHoursFromSkuIds / 24 };
    let formatToPlainStringResult = intl2.formatToPlainString(require(dependencyMap[1]).t.Cz1G97, obj);
  } else {
    const intl = require(dependencyMap[1]).intl;
    obj = { hours: fractionalPremiumUnitsHoursFromSkuIds };
    formatToPlainStringResult = intl.formatToPlainString(require(dependencyMap[1]).t.J9Lu4h, obj);
  }
  return formatToPlainStringResult;
};
export { getFractionalPremiumQuestRewards };
export const getFractionalPremiumQuestRewardName = function getFractionalPremiumQuestRewardName(config) {
  let obj = getFractionalPremiumQuestRewards(config);
  const flatMapResult = obj.flatMap((quantity) => Array(quantity.quantity).fill(quantity.skuId));
  obj = {};
  const fractionalPremiumUnitsHoursFromSkuIds = require(dependencyMap[0]).getFractionalPremiumUnitsHoursFromSkuIds(flatMapResult);
  obj.days = require(dependencyMap[1]).t.fYmirx;
  obj.hours = require(dependencyMap[1]).t.C3RO+g;
  obj.minutes = require(dependencyMap[1]).t.r77oHc;
  const obj2 = require(dependencyMap[0]);
  const obj4 = require(dependencyMap[3]);
  const intl = require(dependencyMap[1]).intl;
  obj = {};
  const diffAsUnitsResult = require(dependencyMap[3]).diffAsUnits(0, fractionalPremiumUnitsHoursFromSkuIds * importDefault(dependencyMap[4]).Millis.HOUR);
  obj.time = require(dependencyMap[3]).unitsAsStrings(diffAsUnitsResult, obj);
  return intl.formatToPlainString(require(dependencyMap[1]).t.4SqnVD, obj);
};
