// Module ID: 14709
// Function ID: 14710
// Name: showMediaMessagePreviewActionSheet
// Dependencies: [4857, 1389, 5247, 14710, 2000, 2]
// Exports: default

// Module 14709 (showMediaMessagePreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import ChannelStore from "ChannelStore" /* 4857 */;
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
        obj.openLazy(asyncRequire(14710, dependencyMap.paths), "MediaMessagePreviewActionSheet", obj2);
      }
    }
  }
};
