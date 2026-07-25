// Module ID: 5940
// Function ID: 52865
// Name: questCosponsorMetadataFromServer
// Dependencies: [5941, 5945, 5946, 2]
// Exports: questFromServerV2

// Module 5940 (questCosponsorMetadataFromServer)
function questCosponsorMetadataFromServer(cosponsor_metadata) {
  if (null != cosponsor_metadata) {
    const obj = {};
    ({ name: obj.name, logotype: obj.logotype, redemption_instructions: obj.redemptionInstructions, logotype_light: obj.logotypeLight, logotype_dark: obj.logotypeDark } = cosponsor_metadata);
    return obj;
  }
}
const result = require("questCtaConfigFromServer").fileFinishedImporting("modules/quests/types/v2/Quest.tsx");

export const questFromServerV2 = function questFromServerV2(id) {
  obj = { id: id.id, configVersion: 2, startsAt: id.starts_at, expiresAt: id.expires_at, features: id.features, assets: obj, colors: obj, messages: obj1 };
  obj = { hero: id.assets.hero, heroVideo: id.assets.hero_video, questBarHero: id.assets.quest_bar_hero, questBarHeroBlurhash: id.assets.quest_bar_hero_blurhash, questBarHeroVideo: id.assets.quest_bar_hero_video, gameTile: id.assets.game_tile, logotype: id.assets.logotype, gameTileLight: id.assets.game_tile_light, gameTileDark: id.assets.game_tile_dark, logotypeLight: id.assets.logotype_light, logotypeDark: id.assets.logotype_dark };
  obj = { primary: id.colors.primary, secondary: id.colors.secondary, taskConfigV2: require(5941) /* _firstPartyTasksFromServer */.questTaskConfigV2FromServer(id.task_config_v2) };
  obj1 = { questName: id.messages.quest_name, gameTitle: id.messages.game_title, gamePublisher: id.messages.game_publisher };
  const obj5 = require(5941) /* _firstPartyTasksFromServer */;
  obj.rewardsConfig = require(5945) /* _rewardRedemptionInstructionsFromServer */.questRewardsConfigV2FromServer(id.rewards_config);
  obj.cosponsorMetadata = questCosponsorMetadataFromServer(id.cosponsor_metadata);
  obj.sharePolicy = id.share_policy;
  const obj6 = require(5945) /* _rewardRedemptionInstructionsFromServer */;
  obj.ctaConfig = require(5946) /* questCtaConfigFromServer */.questCtaConfigFromServer(id.cta_config);
  return obj;
};
export { questCosponsorMetadataFromServer };
