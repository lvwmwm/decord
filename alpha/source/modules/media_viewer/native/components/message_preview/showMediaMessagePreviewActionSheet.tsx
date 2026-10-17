// Module ID: 13998
// Function ID: 13999
// Name: showMediaMessagePreviewActionSheet
// Dependencies: [2068, 1392, 5155, 13999, 2002, 2]
// Exports: default

// Module 13998 (showMediaMessagePreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import ChannelStore from "ChannelStore" /* 2068 */;
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
        obj.openLazy(asyncRequire(13999, dependencyMap.paths), "MediaMessagePreviewActionSheet", obj2);
      }
    }
  }
};
