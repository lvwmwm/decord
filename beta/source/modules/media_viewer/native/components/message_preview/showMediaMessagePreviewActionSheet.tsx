// Module ID: 12532
// Function ID: 12533
// Name: showMediaMessagePreviewActionSheet
// Dependencies: [2051, 1378, 4801, 12533, 1987, 2]
// Exports: default

// Module 12532 (showMediaMessagePreviewActionSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import UserStore from "UserStore" /* 1378 */;
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
        obj.openLazy(asyncRequire(12533, dependencyMap.paths), "MediaMessagePreviewActionSheet", obj2);
      }
    }
  }
};
