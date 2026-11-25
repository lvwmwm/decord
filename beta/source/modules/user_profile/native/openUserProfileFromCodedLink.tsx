// Module ID: 12227
// Function ID: 12228
// Name: openUserProfileFromCodedLink
// Dependencies: [1386, 12228, 8067, 2]
// Exports: default

// Module 12227 (openUserProfileFromCodedLink)
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8067 */;
import UserProfileEmbedRenderingMobileExperiment from "UserProfileEmbedRenderingMobileExperiment" /* 12228 */;
import UserStore from "UserStore" /* 1386 */;
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
