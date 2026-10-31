// Module ID: 7159
// Function ID: 7160
// Name: trackUserAvatarUpdated
// Dependencies: [1072, 7160, 1252, 1409, 2]
// Exports: trackUserAvatarUpdated

// Module 7159 (trackUserAvatarUpdated)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import AvatarUtils from "AvatarUtils" /* 1409 */;
import ProfilePendingImageTypes from "ProfilePendingImageTypes" /* 7160 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/user_profile/utils/trackUserAvatarUpdated.tsx");

export function trackUserAvatarUpdated(isGuildProfile) {
  let NumberResult;
  let avatarHash;
  let avatarId;
  let obj2;
  let flag = isGuildProfile.isGuildProfile;
  ({ avatarHash, avatarId } = isGuildProfile);
  if (flag === undefined) {
    flag = false;
  }
  let NEW_ASSET = isGuildProfile.avatarAssetOrigin;
  if (NEW_ASSET === undefined) {
    NEW_ASSET = ProfilePendingImageTypes.AssetOriginTypes.NEW_ASSET;
  }
  const obj = { animated: obj2.isAnimatedIconHash(avatarHash), is_guild_profile: flag, recent_avatar_id: NumberResult, is_edited_recent_avatar: NEW_ASSET === ProfilePendingImageTypes.AssetOriginTypes.EDITED_ARCHIVED_ASSET };
  const track = AnalyticsUtilsDefault.track;
  const USER_AVATAR_UPDATED = AnalyticEvents.USER_AVATAR_UPDATED;
  AnalyticsUtilsDefault;
  NumberResult = undefined;
  obj2 = AvatarUtils;
  if (NEW_ASSET === ProfilePendingImageTypes.AssetOriginTypes.ARCHIVED_ASSET) {
    const _Number = Number;
    NumberResult = Number(avatarId);
  }
  track(USER_AVATAR_UPDATED, obj);
}
