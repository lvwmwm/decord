// Module ID: 13306
// Function ID: 13307
// Name: showMediaMessagePreviewActionSheet
// Dependencies: [2045, 1376, 4757, 13307, 1984, 2]
// Exports: default

// Module 13306 (showMediaMessagePreviewActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import UserStore from "UserStore" /* 1376 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/message_preview/showMediaMessagePreviewActionSheet.tsx");

export default function showMediaMessagePreviewActionSheet(message) {
  message = message.message;
  const channel = ChannelStore.getChannel(message.channelId);
  if (null != channel) {
    if (null != message) {
      const user = UserStore.getUser(message.author.id);
      if (null != user) {
        const obj2 = { channel, message, user, closeMediaModal: message.closeMediaModal };
        ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13307, dependencyMap.paths), "MediaMessagePreviewActionSheet", obj2);
      }
    }
  }
};
