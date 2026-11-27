// Module ID: 14147
// Function ID: 14148
// Name: showMediaMessagePreviewActionSheet
// Dependencies: [4892, 1387, 5257, 14148, 2120, 2]
// Exports: default

// Module 14147 (showMediaMessagePreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import ChannelStore from "ChannelStore" /* 4892 */;
import UserStore from "UserStore" /* 1387 */;
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
        obj.openLazy(asyncRequire(14148, dependencyMap.paths), "MediaMessagePreviewActionSheet", obj2);
      }
    }
  }
};
