// Module ID: 12119
// Function ID: 12120
// Name: showMediaMessagePreviewActionSheet
// Dependencies: [1391, 1922, 4346, 12120, 2008, 2]
// Exports: default

// Module 12119 (showMediaMessagePreviewActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4346 */;
import closure_3 from "ensureGuildLoaded" /* 1391 */;
import closure_4 from "mergeGuildAvatar" /* 1922 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/media_viewer/native/components/message_preview/showMediaMessagePreviewActionSheet.tsx");

export default function showMediaMessagePreviewActionSheet(message) {
  message = message.message;
  channel = channel.getChannel(message.channelId);
  if (null != channel) {
    if (null != message) {
      user = user.getUser(message.author.id);
      if (null != user) {
        let obj = ACTION_SHEET_HEIGHT_HALFDefault;
        obj = { channel: null, message: null, user: null, closeMediaModal: null };
        obj[0] = channel;
        obj[1] = message;
        obj[2] = user;
        obj[3] = message.closeMediaModal;
        obj.openLazy(asyncRequireImpl(12120, dependencyMap.paths), "MediaMessagePreviewActionSheet", obj);
      }
    }
  }
};
