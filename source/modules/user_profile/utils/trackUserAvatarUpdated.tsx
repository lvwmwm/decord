// Module ID: 9223
// Function ID: 72130
// Name: trackUserAvatarUpdated
// Dependencies: []
// Exports: trackUserAvatarUpdated

// Module 9223 (trackUserAvatarUpdated)
const AnalyticEvents = require(dependencyMap[0]).AnalyticEvents;
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/user_profile/utils/trackUserAvatarUpdated.tsx");

export const trackUserAvatarUpdated = function trackUserAvatarUpdated(isGuildProfile) {
  let avatarHash;
  let avatarId;
  let flag = isGuildProfile.isGuildProfile;
  ({ avatarHash, avatarId } = isGuildProfile);
  if (flag === undefined) {
    flag = false;
  }
  let NEW_ASSET = isGuildProfile.avatarAssetOrigin;
  if (NEW_ASSET === undefined) {
    NEW_ASSET = require(dependencyMap[1]).AssetOriginTypes.NEW_ASSET;
  }
  let obj = importDefault(dependencyMap[2]);
  obj = { animated: require(dependencyMap[3]).isAnimatedIconHash(avatarHash), is_guild_profile: flag };
  let NumberResult;
  if (NEW_ASSET === require(dependencyMap[1]).AssetOriginTypes.ARCHIVED_ASSET) {
    const _Number = Number;
    NumberResult = Number(avatarId);
  }
  obj.recent_avatar_id = NumberResult;
  obj.is_edited_recent_avatar = NEW_ASSET === require(dependencyMap[1]).AssetOriginTypes.EDITED_ARCHIVED_ASSET;
  obj.track(AnalyticEvents.USER_AVATAR_UPDATED, obj);
};
