// Module ID: 8659
// Function ID: 8660
// Name: openUserProfileAvatarMediaViewer
// Dependencies: [5181, 1087, 8660, 2]
// Exports: default

// Module 8659 (openUserProfileAvatarMediaViewer)
import Constants from "Constants" /* 1087 */;
import openMediaModal from "openMediaModal" /* 8660 */;
import AccessibilityStore from "AccessibilityStore" /* 5181 */;
import size_mod from "module_2" /* 2 */;

const AVATAR_MAX_SIZE = Constants.AVATAR_MAX_SIZE;
let size = size_mod;
const result = size.fileFinishedImporting("modules/user_profile/native/openUserProfileAvatarMediaViewer.tsx");

export default function openUserProfileAvatarMediaViewer(user) {
  let guildId;
  let items;
  let originViewOrOriginLayout;
  user = user.user;
  const useReducedMotion = AccessibilityStore.useReducedMotion;
  let animate = !useReducedMotion;
  ({ guildId, originViewOrOriginLayout } = user);
  const getAvatarURL = user.getAvatarURL;
  if (!useReducedMotion) {
    animate = user.animate;
  }
  const avatarURL = getAvatarURL(guildId, tmp, animate);
  if (typeof avatarURL === "string") {
    size = { uri: avatarURL, mediaIndex: 0, height: AVATAR_MAX_SIZE, width: AVATAR_MAX_SIZE, accessoryType: "embed" };
    const obj2 = { initialSources: items, originViewOrOriginLayout, analyticsSource: "user_profile_avatar", openAs: "action-sheet", shareable: false, disableDownload: true, disableMediaOverlayButton: true, disableMediaOverlayFooter: true };
    items = [size];
    const obj = openMediaModal;
    obj.openMediaModal(obj2);
  }
};
