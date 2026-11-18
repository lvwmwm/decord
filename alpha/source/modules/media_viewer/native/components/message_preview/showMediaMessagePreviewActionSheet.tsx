// Module ID: 10072
// Function ID: 10073
// Name: showMediaMessagePreviewActionSheet
// Dependencies: [4672, 1388, 5037, 10073, 2121, 2]
// Exports: default

// Module 10072 (showMediaMessagePreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5037 */;
import ChannelStore from "ChannelStore" /* 4672 */;
import UserStore from "UserStore" /* 1388 */;
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
        obj.openLazy(asyncRequire(10073, dependencyMap.paths), "MediaMessagePreviewActionSheet", obj2);
      }
    }
  }
};
