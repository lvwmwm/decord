// Module ID: 8556
// Function ID: 8557
// Name: trackUserAvatarUpdated
// Dependencies: [676, 8320, 698, 1435, 2]
// Exports: trackUserAvatarUpdated

// Module 8556 (trackUserAvatarUpdated)
import { AnalyticEvents } from "ME";

const result = require("expandEventProperties").fileFinishedImporting("modules/user_profile/utils/trackUserAvatarUpdated.tsx");

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
    NEW_ASSET = require(8320) /* AssetOriginTypes */.AssetOriginTypes.NEW_ASSET;
  }
  let obj = importDefault(698);
  obj = { animated: null, is_guild_profile: null, recent_avatar_id: null, is_edited_recent_avatar: null };
  obj[0] = require(1435) /* getAvatarURL */.isAnimatedIconHash(avatarHash);
  obj[1] = flag;
  let NumberResult;
  if (NEW_ASSET === require(8320) /* AssetOriginTypes */.AssetOriginTypes.ARCHIVED_ASSET) {
    const _Number = Number;
    NumberResult = Number(avatarId);
  }
  obj[2] = NumberResult;
  obj[3] = NEW_ASSET === require(8320) /* AssetOriginTypes */.AssetOriginTypes.EDITED_ARCHIVED_ASSET;
  obj.track(AnalyticEvents.USER_AVATAR_UPDATED, obj);
};
