// Module ID: 18841
// Function ID: 18842
// Name: ChannelSettingsUtils
// Dependencies: [2]
// Exports: getIsChannelNameSettingEditable

// Module 18841 (ChannelSettingsUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/channel_settings/ChannelSettingsUtils.tsx");

export function getIsChannelNameSettingEditable(arg0) {
  let canManageThread;
  let canSendMessages;
  let isChannelOwner;
  let isForumPost;
  ({ canManageThread, canSendMessages, isForumPost, isChannelOwner } = arg0);
  if (!isForumPost) {
    canSendMessages = canManageThread;
    if (!isForumPost) {
      canSendMessages = tmp;
      if (tmp2) {
        canSendMessages = canManageThread || isChannelOwner;
      }
    }
  }
  return canSendMessages;
}
