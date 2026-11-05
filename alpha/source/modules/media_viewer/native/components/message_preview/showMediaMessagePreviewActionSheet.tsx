// Module ID: 15010
// Function ID: 15011
// Name: showMediaMessagePreviewActionSheet
// Dependencies: [4992, 1385, 5384, 15011, 2123, 2]
// Exports: default

// Module 15010 (showMediaMessagePreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import ChannelStore from "ChannelStore" /* 4992 */;
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
        obj.openLazy(asyncRequire(15011, dependencyMap.paths), "MediaMessagePreviewActionSheet", obj2);
      }
    }
  }
};
