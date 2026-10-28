// Module ID: 14475
// Function ID: 14476
// Name: showMediaMessagePreviewActionSheet
// Dependencies: [4856, 1389, 5246, 14476, 1999, 2]
// Exports: default

// Module 14475 (showMediaMessagePreviewActionSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5246 */;
import ChannelStore from "ChannelStore" /* 4856 */;
import UserStore from "UserStore" /* 1389 */;
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
        obj.openLazy(asyncRequire(14476, dependencyMap.paths), "MediaMessagePreviewActionSheet", obj2);
      }
    }
  }
};
