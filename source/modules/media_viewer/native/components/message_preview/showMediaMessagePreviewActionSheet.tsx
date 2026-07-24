// Module ID: 12271
// Function ID: 95838
// Name: showMediaMessagePreviewActionSheet
// Dependencies: [1348, 1849, 4098, 12272, 1934, 2]
// Exports: default

// Module 12271 (showMediaMessagePreviewActionSheet)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("showActionSheet").fileFinishedImporting("modules/media_viewer/native/components/message_preview/showMediaMessagePreviewActionSheet.tsx");

export default function showMediaMessagePreviewActionSheet(message) {
  message = message.message;
  channel = channel.getChannel(message.channelId);
  if (null != channel) {
    if (null != message) {
      user = user.getUser(message.author.id);
      if (null != user) {
        let obj = importDefault(4098);
        obj = { channel, message, user, closeMediaModal: message.closeMediaModal };
        obj.openLazy(require(1934) /* maybeLoadBundle */(12272, dependencyMap.paths), "MediaMessagePreviewActionSheet", obj);
      }
    }
  }
};
