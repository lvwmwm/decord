// Module ID: 16397
// Function ID: 16398
// Name: getIsChannelNameSettingEditable
// Dependencies: [2]
// Exports: getIsChannelNameSettingEditable

// Module 16397 (getIsChannelNameSettingEditable)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("components_native/channel_settings/ChannelSettingsUtils.tsx");

export const getIsChannelNameSettingEditable = function getIsChannelNameSettingEditable(arg0) {
  ({ canManageThread, canSendMessages, isForumPost, isChannelOwner } = arg0);
  if (!isForumPost) {
    canSendMessages = canManageThread;
    if (!isForumPost) {
      canSendMessages = tmp;
      if (tmp2) {
        let tmp3 = canManageThread;
        if (!canManageThread) {
          tmp3 = isChannelOwner;
        }
        canSendMessages = tmp3;
      }
    }
  }
  return canSendMessages;
};
