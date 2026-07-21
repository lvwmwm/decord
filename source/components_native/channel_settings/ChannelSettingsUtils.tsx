// Module ID: 15373
// Function ID: 117183
// Name: getIsChannelNameSettingEditable
// Dependencies: [284214097]
// Exports: getIsChannelNameSettingEditable

// Module 15373 (getIsChannelNameSettingEditable)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("components_native/channel_settings/ChannelSettingsUtils.tsx");

export const getIsChannelNameSettingEditable = function getIsChannelNameSettingEditable(arg0) {
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
