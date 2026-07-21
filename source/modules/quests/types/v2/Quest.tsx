// Module ID: 6945
// Function ID: 55505
// Name: questCosponsorMetadataFromServer
// Dependencies: []
// Exports: questFromServerV2

// Module 6945 (questCosponsorMetadataFromServer)
function questCosponsorMetadataFromServer(cosponsor_metadata) {
  if (null != cosponsor_metadata) {
    const obj = {};
    ({ name: obj.name, logotype: obj.logotype, redemption_instructions: obj.redemptionInstructions, logotype_light: obj.logotypeLight, logotype_dark: obj.logotypeDark } = cosponsor_metadata);
    return obj;
  }
}
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/quests/types/v2/Quest.tsx");

export const questFromServerV2 = function questFromServerV2(id) {
  let obj = { id: id.id, configVersion: 2, startsAt: id.starts_at, expiresAt: id.expires_at, features: id.features, application: obj, assets: obj, colors: obj1, messages: obj2 };
  obj = { id: id.application.id, name: id.application.name };
  obj = { hero: id.assets.hero, heroVideo: id.assets.hero_video, questBarHero: id.assets.quest_bar_hero, questBarHeroBlurhash: id.assets.quest_bar_hero_blurhash, questBarHeroVideo: id.assets.quest_bar_hero_video, gameTile: id.assets.game_tile, logotype: id.assets.logotype, gameTileLight: id.assets.game_tile_light, gameTileDark: id.assets.game_tile_dark, logotypeLight: id.assets.logotype_light, logotypeDark: id.assets.logotype_dark, taskConfigV2: require(dependencyMap[0]).questTaskConfigV2FromServer(id.task_config_v2) };
  const obj1 = { primary: id.colors.primary, secondary: id.colors.secondary };
  const obj2 = { questName: id.messages.quest_name, gameTitle: id.messages.game_title, gamePublisher: id.messages.game_publisher };
  const obj6 = require(dependencyMap[0]);
  obj.rewardsConfig = require(dependencyMap[1]).questRewardsConfigV2FromServer(id.rewards_config);
  obj.cosponsorMetadata = questCosponsorMetadataFromServer(id.cosponsor_metadata);
  obj.sharePolicy = id.share_policy;
  const obj7 = require(dependencyMap[1]);
  obj.ctaConfig = require(dependencyMap[2]).questCtaConfigFromServer(id.cta_config);
  return obj;
};
export { questCosponsorMetadataFromServer };
