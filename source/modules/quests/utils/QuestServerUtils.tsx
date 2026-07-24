// Module ID: 6948
// Function ID: 55543
// Name: questConfigFromServer
// Dependencies: [57, 4329, 6949, 6946, 2]
// Exports: excludedQuestFromServer, getClaimedQuestWithUserStatusFromServer, isQuestWithKnownConfigVersion, questWithUserStatusFromServer, questsEntitlementsFromServer

// Module 6948 (questConfigFromServer)
import _slicedToArray from "_slicedToArray";

const require = arg1;
function questConfigFromServer(body) {
  const match = require(4329) /* n */.match(body);
  const str = require(4329) /* n */;
  return match.with({ config_version: 2 }, (id) => outer1_0(outer1_1[2]).questFromServerV2(id)).exhaustive();
}
function progressFromServer(progress) {
  let heartbeat;
  let obj = {};
  const entries = Object.entries(progress);
  for (let num = 0; num < entries.length; num = num + 1) {
    let tmp = callback;
    let tmp2 = callback(entries[num], 2);
    obj = {};
    ({ event_name: obj2.eventName, value: obj2.value, updated_at: obj2.updatedAt, completed_at: obj2.completedAt, heartbeat } = tmp2[1]);
    let tmp3 = null;
    if (null != heartbeat) {
      obj = {};
      ({ last_beat_at: obj3.lastBeatAt, expires_at: obj3.expiresAt } = heartbeat);
      tmp3 = obj;
    }
    obj.heartbeat = tmp3;
    obj[tmp2[0]] = obj;
  }
  return obj;
}
function questUserStatusFromServer(body) {
  const obj = { userId: body.user_id, questId: body.quest_id, enrolledAt: body.enrolled_at, completedAt: body.completed_at, claimedAt: body.claimed_at };
  const claimed_tier = body.claimed_tier;
  let tmp = null;
  if (null != claimed_tier) {
    tmp = claimed_tier;
  }
  obj.claimedTier = tmp;
  const orb_quantity_claimed = body.orb_quantity_claimed;
  let tmp2 = null;
  if (null != orb_quantity_claimed) {
    tmp2 = orb_quantity_claimed;
  }
  obj.orbQuantityClaimed = tmp2;
  ({ last_stream_heartbeat_at: obj.lastStreamHeartbeatAt, stream_progress_seconds: obj.streamProgressSeconds, dismissed_quest_content: obj.dismissedQuestContent } = body);
  obj.progress = progressFromServer(body.progress);
  return obj;
}
function getSimpleRewardFromServer(type) {
  if (type.type === require(6946) /* QuestRewardTypes */.QuestRewardTypes.VIRTUAL_CURRENCY) {
    let obj = {};
    ({ sku_id: obj2.skuId, type: obj2.type, name: obj2.name, name_with_article: obj2.nameWithArticle, collectible_product: obj2.collectibleProduct, orb_quantity: obj2.orbQuantity } = type);
  } else {
    obj = {};
    ({ sku_id: obj.skuId, type: obj.type, name: obj.name, name_with_article: obj.nameWithArticle, asset: obj.asset, asset_video: obj.assetVideo, collectible_product: obj.collectibleProduct } = type);
  }
  return obj;
}
function getClaimedQuestFromServer(config) {
  obj = { id: config.id, startsAt: config.starts_at, expiresAt: config.expires_at, features: config.features, messages: obj, assets: obj, colors: obj1, rewards: rewards.map(getSimpleRewardFromServer) };
  obj = { questName: config.messages.quest_name, gamePublisher: config.messages.game_publisher, gameTitle: config.messages.game_title };
  obj = { hero: config.assets.hero, heroVideo: config.assets.hero_video, questBarHero: config.assets.quest_bar_hero, questBarHeroVideo: config.assets.quest_bar_hero_video, gameTile: config.assets.game_tile, logotype: config.assets.logotype, logotypeLight: config.assets.logotype_light, logotypeDark: config.assets.logotype_dark, gameTileLight: config.assets.game_tile_light, gameTileDark: config.assets.game_tile_dark };
  rewards = config.rewards;
  obj.cosponsorMetadata = require(6949) /* questCosponsorMetadataFromServer */.questCosponsorMetadataFromServer(config.cosponsor_metadata);
  return obj;
}
function questsRewardCodeFromServer(body) {
  const obj = { userId: body.user_id, questId: body.quest_id, code: body.code, platform: body.platform, claimedAt: body.claimed_at };
  const tier = body.tier;
  let tmp = null;
  if (null != tier) {
    tmp = tier;
  }
  obj.tier = tmp;
  return obj;
}
function _questsTenantMetadataFromServer(tenant_metadata) {
  let quest_rewards;
  if (null != tenant_metadata) {
    quest_rewards = tenant_metadata.quest_rewards;
  }
  if (null == quest_rewards) {
    return null;
  } else {
    quest_rewards = tenant_metadata.quest_rewards;
    const tag = quest_rewards.reward.tag;
    if (require(6946) /* QuestRewardTypes */.QuestRewardTypes.IN_GAME === tag) {
      let obj = {};
      obj = {};
      const obj1 = { tag: quest_rewards.reward.tag };
      obj.reward = obj1;
      obj.questRewards = obj;
      return obj;
    } else if (require(6946) /* QuestRewardTypes */.QuestRewardTypes.REWARD_CODE === tag) {
      obj = {};
      const obj2 = {};
      const obj3 = { tag: quest_rewards.reward.tag, rewardCode: questsRewardCodeFromServer(quest_rewards.reward.reward_code) };
      obj2.reward = obj3;
      obj.questRewards = obj2;
      return obj;
    }
  }
}
function _questsEntitlementFromServer(skuId) {
  return { skuId: skuId.sku_id, tenantMetadata: _questsTenantMetadataFromServer(skuId.tenant_metadata), consumed: skuId.consumed };
}
const result = require("questCosponsorMetadataFromServer").fileFinishedImporting("modules/quests/utils/QuestServerUtils.tsx");

export const isQuestWithKnownConfigVersion = function isQuestWithKnownConfigVersion(config) {
  const match = require(4329) /* n */.match(config.config);
  const str = require(4329) /* n */;
  return match.with({ config_version: 2 }, () => true).exhaustive();
};
export { questConfigFromServer };
export { questUserStatusFromServer };
export const questWithUserStatusFromServer = function questWithUserStatusFromServer(body) {
  const obj = { id: body.id, preview: body.preview, config: questConfigFromServer(body.config) };
  let tmp = null;
  if (null != body.user_status) {
    tmp = questUserStatusFromServer(body.user_status);
  }
  obj.userStatus = tmp;
  ({ targeted_content: obj.targetedContent, traffic_metadata_sealed: obj.trafficMetadataSealed } = body);
  return obj;
};
export const excludedQuestFromServer = function excludedQuestFromServer(id) {
  return { id: id.id, replacementId: id.replacement_id };
};
export const getClaimedQuestWithUserStatusFromServer = function getClaimedQuestWithUserStatusFromServer(id) {
  const obj = { id: id.id, config: getClaimedQuestFromServer(id.config) };
  let tmp = null;
  if (null != id.user_status) {
    tmp = questUserStatusFromServer(id.user_status);
  }
  obj.userStatus = tmp;
  return obj;
};
export { questsRewardCodeFromServer };
export const questsEntitlementsFromServer = function questsEntitlementsFromServer(body) {
  const entitlements = body.entitlements;
  return { claimedAt: body.claimed_at, items: entitlements.map(_questsEntitlementFromServer), errors: body.errors };
};
