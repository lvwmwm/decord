// Module ID: 12166
// Function ID: 12167
// Name: showMediaMessagePreviewActionSheet
// Dependencies: [1372, 1903, 4253, 12167, 1988, 2]
// Exports: default

// Module 12166 (showMediaMessagePreviewActionSheet)
import ensureGuildLoaded from "ensureGuildLoaded";
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
const result = require("ACTION_SHEET_HEIGHT_HALF").fileFinishedImporting("modules/media_viewer/native/components/message_preview/showMediaMessagePreviewActionSheet.tsx");

export default function showMediaMessagePreviewActionSheet(message) {
  message = message.message;
  channel = channel.getChannel(message.channelId);
  if (null != channel) {
    if (null != message) {
      user = user.getUser(message.author.id);
      if (null != user) {
        let obj = importDefault(4253);
        obj = { channel: null, message: null, user: null, closeMediaModal: null };
        obj[0] = channel;
        obj[1] = message;
        obj[2] = user;
        obj[3] = message.closeMediaModal;
        obj.openLazy(require(1988) /* asyncRequireImpl */(12167, dependencyMap.paths), "MediaMessagePreviewActionSheet", obj);
      }
    }
  }
};
