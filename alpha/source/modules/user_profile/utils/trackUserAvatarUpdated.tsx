// Module ID: 6676
// Function ID: 6677
// Name: trackUserAvatarUpdated
// Dependencies: [1085, 6677, 1265, 1415, 2]
// Exports: trackUserAvatarUpdated

// Module 6676 (trackUserAvatarUpdated)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import AvatarUtils from "AvatarUtils" /* 1415 */;
import ProfilePendingImageTypes from "ProfilePendingImageTypes" /* 6677 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/user_profile/utils/trackUserAvatarUpdated.tsx");

export const trackUserAvatarUpdated = function trackUserAvatarUpdated(isGuildProfile) {
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
};
