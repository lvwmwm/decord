// Module ID: 12329
// Function ID: 12330
// Name: openUserProfileFromCodedLink
// Dependencies: [1387, 11982, 6133, 2]
// Exports: default

// Module 12329 (openUserProfileFromCodedLink)
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 6133 */;
import UserProfileEmbedRenderingMobileExperiment from "UserProfileEmbedRenderingMobileExperiment" /* 11982 */;
import UserStore from "UserStore" /* 1387 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/native/openUserProfileFromCodedLink.tsx");

export default function openUserProfileFromCodedLink(userId, arg1) {
  const obj = UserProfileEmbedRenderingMobileExperiment;
  const isUserProfileEmbedRenderingMobileEnabled = obj.getIsUserProfileEmbedRenderingMobileEnabled("MessagesHandlers") && null != UserStore.getUser(userId);
  if (isUserProfileEmbedRenderingMobileEnabled) {
    const obj3 = { userId, channelId: null, messageId: null };
    ({ channel_id: obj2.channelId, id: obj2.messageId } = arg1);
    showUserProfileActionSheetDefault(obj3);
  }
};
