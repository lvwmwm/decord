// Module ID: 6949
// Function ID: 55512
// Name: _rewardRedemptionInstructionsFromServer
// Dependencies: []
// Exports: questRewardsConfigV2FromServer

// Module 6949 (_rewardRedemptionInstructionsFromServer)
function _rewardRedemptionInstructionsFromServer(redemption_instructions_by_platform) {
  const obj = {};
  const keys = Object.keys(redemption_instructions_by_platform);
  for (let num = 0; num < keys.length; num = num + 1) {
    let tmp = keys[num];
    let _parseInt = parseInt;
    let parsed = parseInt(tmp);
    let tmp3 = require;
    let tmp4 = dependencyMap;
    let QUEST_REWARD_CODE_PLATFORMS_SET = require(dependencyMap[0]).QUEST_REWARD_CODE_PLATFORMS_SET;
    if (QUEST_REWARD_CODE_PLATFORMS_SET.has(parsed)) {
      obj[parsed] = redemption_instructions_by_platform[tmp];
    }
  }
  return obj;
}
function _questRewardV2FromServer(type) {
  type = type.type;
  if (require(dependencyMap[1]).QuestRewardTypes.REWARD_CODE === type) {
    let obj = { type: require(dependencyMap[1]).QuestRewardTypes.REWARD_CODE };
    ({ sku_id: obj9.skuId, asset: obj9.asset, asset_video: obj9.assetVideo } = type);
    obj = { redemptionInstructionsByPlatform: _rewardRedemptionInstructionsFromServer(type.messages.redemption_instructions_by_platform), name: type.messages.name, nameWithArticle: type.messages.name_with_article };
    obj.messages = obj;
    ({ approximate_count: obj9.approximateCount, redemption_link: obj9.redemptionLink } = type);
    return obj;
  } else if (require(dependencyMap[1]).QuestRewardTypes.COLLECTIBLE === type) {
    const obj1 = { type: require(dependencyMap[1]).QuestRewardTypes.COLLECTIBLE };
    ({ sku_id: obj7.skuId, asset: obj7.asset, asset_video: obj7.assetVideo } = type);
    const obj2 = { redemptionInstructionsByPlatform: _rewardRedemptionInstructionsFromServer(type.messages.redemption_instructions_by_platform), name: type.messages.name, nameWithArticle: type.messages.name_with_article };
    obj1.messages = obj2;
    ({ expires_at: obj7.expiresAt, expiration_mode: obj7.expirationMode, expires_at_premium: obj7.expiresAtPremium } = type);
    return obj1;
  } else if (require(dependencyMap[1]).QuestRewardTypes.VIRTUAL_CURRENCY === type) {
    const obj3 = { type: require(dependencyMap[1]).QuestRewardTypes.VIRTUAL_CURRENCY, skuId: type.sku_id };
    const obj4 = { redemptionInstructionsByPlatform: _rewardRedemptionInstructionsFromServer(type.messages.redemption_instructions_by_platform), name: type.messages.name, nameWithArticle: type.messages.name_with_article };
    obj3.messages = obj4;
    ({ orb_quantity: obj5.orbQuantity, premium_orb_quantity: obj5.premiumOrbQuantity } = type);
    return obj3;
  } else if (require(dependencyMap[1]).QuestRewardTypes.FRACTIONAL_PREMIUM === type) {
    const obj5 = { type: require(dependencyMap[1]).QuestRewardTypes.FRACTIONAL_PREMIUM };
    ({ sku_id: obj3.skuId, asset: obj3.asset, asset_video: obj3.assetVideo, quantity: obj3.quantity } = type);
    const obj6 = { redemptionInstructionsByPlatform: _rewardRedemptionInstructionsFromServer(type.messages.redemption_instructions_by_platform), name: type.messages.name, nameWithArticle: type.messages.name_with_article };
    obj5.messages = obj6;
    return obj5;
  } else if (require(dependencyMap[1]).QuestRewardTypes.IN_GAME === type) {
    obj = { type: require(dependencyMap[1]).QuestRewardTypes.IN_GAME };
    ({ sku_id: obj.skuId, asset: obj.asset, asset_video: obj.assetVideo } = type);
    const obj7 = { redemptionInstructionsByPlatform: _rewardRedemptionInstructionsFromServer(type.messages.redemption_instructions_by_platform), name: type.messages.name, nameWithArticle: type.messages.name_with_article };
    obj.messages = obj7;
    return obj;
  }
}
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/quests/types/v2/Reward.tsx");

export const questRewardsConfigV2FromServer = function questRewardsConfigV2FromServer(rewards_config) {
  const rewards = rewards_config.rewards;
  return { assignmentMethod: rewards_config.assignment_method, rewards: rewards.map(_questRewardV2FromServer), rewardsExpireAt: rewards_config.rewards_expire_at, platforms: rewards_config.platforms };
};
