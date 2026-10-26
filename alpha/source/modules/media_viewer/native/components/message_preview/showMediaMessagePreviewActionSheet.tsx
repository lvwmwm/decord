// Module ID: 14223
// Function ID: 14224
// Name: showMediaMessagePreviewActionSheet
// Dependencies: [4823, 1392, 5210, 14224, 2002, 2]
// Exports: default

// Module 14223 (showMediaMessagePreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import ChannelStore from "ChannelStore" /* 4823 */;
import UserStore from "UserStore" /* 1392 */;
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
        obj.openLazy(asyncRequire(14224, dependencyMap.paths), "MediaMessagePreviewActionSheet", obj2);
      }
    }
  }
};
