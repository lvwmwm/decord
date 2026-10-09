// Module ID: 13017
// Function ID: 13018
// Name: showMediaMessagePreviewActionSheet
// Dependencies: [2064, 1390, 5055, 13018, 2000, 2]
// Exports: default

// Module 13017 (showMediaMessagePreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import UserStore from "UserStore" /* 1390 */;
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
        obj.openLazy(asyncRequire(13018, dependencyMap.paths), "MediaMessagePreviewActionSheet", obj2);
      }
    }
  }
};
