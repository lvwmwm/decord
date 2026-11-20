// Module ID: 10053
// Function ID: 10054
// Name: showMediaMessagePreviewActionSheet
// Dependencies: [4643, 1386, 5008, 10054, 2119, 2]
// Exports: default

// Module 10053 (showMediaMessagePreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import ChannelStore from "ChannelStore" /* 4643 */;
import UserStore from "UserStore" /* 1386 */;
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
        obj.openLazy(asyncRequire(10054, dependencyMap.paths), "MediaMessagePreviewActionSheet", obj2);
      }
    }
  }
};
