// Module ID: 14743
// Function ID: 14744
// Name: showMediaMessagePreviewActionSheet
// Dependencies: [4858, 1384, 5253, 14744, 1995, 2]
// Exports: default

// Module 14743 (showMediaMessagePreviewActionSheet)
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import UserStore from "UserStore" /* 1384 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/message_preview/showMediaMessagePreviewActionSheet.tsx");

export default function showMediaMessagePreviewActionSheet(message) {
  message = message.message;
  const closeMediaModal = message.closeMediaModal;
  const channel = ChannelStore.getChannel(message.channelId);
  if (null != channel) {
    if (null != message) {
      const user = UserStore.getUser(message.author.id);
      if (null != user) {
        const obj2 = { channel, message, user, closeMediaModal };
        const obj = ActionSheetActionCreatorsDefault;
        obj.openLazy(asyncRequire(14744, dependencyMap.paths), "MediaMessagePreviewActionSheet", obj2);
      }
    }
  }
};
