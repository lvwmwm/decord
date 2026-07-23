// Module ID: 8273
// Function ID: 65262
// Name: openUserProfileAvatarMediaViewer
// Dependencies: [4122, 653, 8274, 2]
// Exports: default

// Module 8273 (openUserProfileAvatarMediaViewer)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AVATAR_MAX_SIZE } from "ME";

const require = arg1;
const result = require("_openMediaModal").fileFinishedImporting("modules/user_profile/native/openUserProfileAvatarMediaViewer.tsx");

export default function openUserProfileAvatarMediaViewer(user) {
  let description;
  let guildId;
  let originViewOrOriginLayout;
  user = user.user;
  let animate = !useReducedMotion.useReducedMotion;
  ({ guildId, originViewOrOriginLayout, description } = user);
  if (animate) {
    animate = user.animate;
  }
  const avatarURL = user.getAvatarURL(guildId, tmp, animate);
  let obj = require(8274) /* _openMediaModal */;
  obj = { initialSources: null, originViewOrOriginLayout: null, analyticsSource: "user_profile_avatar", openAs: "action-sheet", shareable: false, disableDownload: true, disableMediaOverlayButton: true, disableMediaOverlayFooter: true };
  const items = [{ uri: avatarURL, mediaIndex: 0, height: AVATAR_MAX_SIZE, width: AVATAR_MAX_SIZE, description, accessoryType: "embed" }];
  obj.initialSources = items;
  obj.originViewOrOriginLayout = originViewOrOriginLayout;
  obj.openMediaModal(obj);
};
