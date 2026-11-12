// Module ID: 15049
// Function ID: 15050
// Name: showMediaMessagePreviewActionSheet
// Dependencies: [5019, 1385, 5406, 15050, 2118, 2]
// Exports: default

// Module 15049 (showMediaMessagePreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import ChannelStore from "ChannelStore" /* 5019 */;
import UserStore from "UserStore" /* 1385 */;
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
        obj.openLazy(asyncRequire(15050, dependencyMap.paths), "MediaMessagePreviewActionSheet", obj2);
      }
    }
  }
};
