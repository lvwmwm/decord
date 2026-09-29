// Module ID: 8561
// Function ID: 8562
// Name: openUserProfileAvatarMediaViewer
// Dependencies: [4780, 1074, 8562, 2]
// Exports: default

// Module 8561 (openUserProfileAvatarMediaViewer)
import openMediaModal from "openMediaModal" /* 8562 */;
import AccessibilityStore from "AccessibilityStore" /* 4780 */;

require = fn;
const AVATAR_MAX_SIZE = fn(1074).AVATAR_MAX_SIZE;
let size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/openUserProfileAvatarMediaViewer.tsx");

export default function openUserProfileAvatarMediaViewer(user) {
  user = user.user;
  const useReducedMotion = AccessibilityStore.useReducedMotion;
  let animate = !useReducedMotion;
  ({ guildId, originViewOrOriginLayout } = user);
  if (!useReducedMotion) {
    animate = user.animate;
  }
  const avatarURL = user.getAvatarURL(guildId, tmp, animate);
  if (typeof avatarURL === "string") {
    const obj2 = { initialSources: null, originViewOrOriginLayout: null, analyticsSource: "user_profile_avatar", openAs: "action-sheet", shareable: false, disableDownload: true, disableMediaOverlayButton: true, disableMediaOverlayFooter: true };
    const size = { uri: avatarURL, mediaIndex: 0, height: tmp, width: tmp, accessoryType: "embed" };
    const items = [size];
    obj2.initialSources = items;
    obj2.originViewOrOriginLayout = originViewOrOriginLayout;
    openMediaModal.openMediaModal(obj2);
  }
};
