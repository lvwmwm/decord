// Module ID: 12160
// Function ID: 12161
// Name: openUserProfileFromCodedLink
// Dependencies: [1388, 12161, 7948, 2]
// Exports: default

// Module 12160 (openUserProfileFromCodedLink)
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7948 */;
import UserProfileEmbedRenderingMobileExperiment from "UserProfileEmbedRenderingMobileExperiment" /* 12161 */;
import UserStore from "UserStore" /* 1388 */;
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
