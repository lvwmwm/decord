// Module ID: 8052
// Function ID: 64046
// Name: openUserProfileAvatarMediaViewer
// Dependencies: [4123, 653, 8053, 2]
// Exports: default

// Module 8052 (openUserProfileAvatarMediaViewer)
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
  const avatarURL = user.getAvatarURL(guildId, AVATAR_MAX_SIZE, animate);
  if ("string" === typeof avatarURL) {
    let obj = require(8053) /* _openMediaModal */;
    obj = { initialSources: null, originViewOrOriginLayout: null, analyticsSource: "user_profile_avatar", openAs: "action-sheet", shareable: false, disableDownload: true, disableMediaOverlayButton: true, disableMediaOverlayFooter: true };
    obj = { uri: avatarURL, mediaIndex: 0, height: AVATAR_MAX_SIZE, width: AVATAR_MAX_SIZE, accessoryType: "embed" };
    const items = [obj];
    obj.initialSources = items;
    obj.originViewOrOriginLayout = originViewOrOriginLayout;
    obj.openMediaModal(obj);
  }
};
