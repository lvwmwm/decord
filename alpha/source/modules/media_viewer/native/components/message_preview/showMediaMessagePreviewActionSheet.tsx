// Module ID: 14916
// Function ID: 14917
// Name: showMediaMessagePreviewActionSheet
// Dependencies: [4990, 1385, 5381, 14917, 2123, 2]
// Exports: default

// Module 14916 (showMediaMessagePreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
import ChannelStore from "ChannelStore" /* 4990 */;
import UserStore from "UserStore" /* 1385 */;
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
        obj.openLazy(asyncRequire(14917, dependencyMap.paths), "MediaMessagePreviewActionSheet", obj2);
      }
    }
  }
};
