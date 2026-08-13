// Module ID: 12318
// Function ID: 12319
// Name: showMediaMessagePreviewActionSheet
// Dependencies: [1391, 1922, 4310, 12319, 2007, 2]
// Exports: default

// Module 12318 (showMediaMessagePreviewActionSheet)
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
        let obj = importDefault(4310);
        obj = { channel: null, message: null, user: null, closeMediaModal: null };
        obj[0] = channel;
        obj[1] = message;
        obj[2] = user;
        obj[3] = message.closeMediaModal;
        obj.openLazy(require(2007) /* asyncRequireImpl */(12319, dependencyMap.paths), "MediaMessagePreviewActionSheet", obj);
      }
    }
  }
};
