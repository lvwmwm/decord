// Module ID: 9231
// Function ID: 72195
// Name: trackUserAvatarUpdated
// Dependencies: [653, 7855, 675, 1392, 2]
// Exports: trackUserAvatarUpdated

// Module 9231 (trackUserAvatarUpdated)
import { AnalyticEvents } from "ME";

const result = require("expandLocation").fileFinishedImporting("modules/user_profile/utils/trackUserAvatarUpdated.tsx");

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
    NEW_ASSET = require(7855) /* AssetOriginTypes */.AssetOriginTypes.NEW_ASSET;
  }
  let obj = importDefault(675);
  obj = { animated: require(1392) /* getAvatarURL */.isAnimatedIconHash(avatarHash), is_guild_profile: flag };
  let NumberResult;
  if (NEW_ASSET === require(7855) /* AssetOriginTypes */.AssetOriginTypes.ARCHIVED_ASSET) {
    const _Number = Number;
    NumberResult = Number(avatarId);
  }
  obj.recent_avatar_id = NumberResult;
  obj.is_edited_recent_avatar = NEW_ASSET === require(7855) /* AssetOriginTypes */.AssetOriginTypes.EDITED_ARCHIVED_ASSET;
  obj.track(AnalyticEvents.USER_AVATAR_UPDATED, obj);
};
