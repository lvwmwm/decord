// Module ID: 12937
// Function ID: 12938
// Name: showMediaMessagePreviewActionSheet
// Dependencies: [2063, 1389, 5054, 12938, 1999, 2]
// Exports: default

// Module 12937 (showMediaMessagePreviewActionSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import ChannelStore from "ChannelStore" /* 2063 */;
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
        obj.openLazy(asyncRequire(12938, dependencyMap.paths), "MediaMessagePreviewActionSheet", obj2);
      }
    }
  }
};
