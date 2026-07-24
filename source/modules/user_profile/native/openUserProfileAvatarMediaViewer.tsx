// Module ID: 8317
// Function ID: 65490
// Name: openUserProfileAvatarMediaViewer
// Dependencies: [4122, 653, 8318, 2]
// Exports: default

// Module 8317 (openUserProfileAvatarMediaViewer)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AVATAR_MAX_SIZE } from "ME";

const require = arg1;
const result = require("_openMediaModal").fileFinishedImporting("modules/user_profile/native/openUserProfileAvatarMediaViewer.tsx");

export default function openUserProfileAvatarMediaViewer(user) {
  let guildId;
  let originViewOrOriginLayout;
  user = user.user;
  let animate = !useReducedMotion.useReducedMotion;
  ({ guildId, originViewOrOriginLayout } = user);
  if (animate) {
    animate = user.animate;
  }
  const avatarURL = user.getAvatarURL(guildId, tmp, animate);
  let obj = require(8318) /* _openMediaModal */;
  obj = { initialSources: null, originViewOrOriginLayout: null, analyticsSource: "user_profile_avatar", openAs: "action-sheet", shareable: false, disableDownload: true, disableMediaOverlayButton: true, disableMediaOverlayFooter: true };
  const items = [{ uri: avatarURL, mediaIndex: 0, height: AVATAR_MAX_SIZE, width: AVATAR_MAX_SIZE, accessoryType: "embed" }];
  obj.initialSources = items;
  obj.originViewOrOriginLayout = originViewOrOriginLayout;
  obj.openMediaModal(obj);
};
