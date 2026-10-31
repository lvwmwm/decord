// Module ID: 14781
// Function ID: 14782
// Name: showMediaMessagePreviewActionSheet
// Dependencies: [4863, 1383, 5258, 14782, 1994, 2]
// Exports: default

// Module 14781 (showMediaMessagePreviewActionSheet)
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import UserStore from "UserStore" /* 1383 */;
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
        obj.openLazy(asyncRequire(14782, dependencyMap.paths), "MediaMessagePreviewActionSheet", obj2);
      }
    }
  }
};
