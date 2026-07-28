// Module ID: 12291
// Function ID: 95822
// Name: showMediaMessagePreviewActionSheet
// Dependencies: [1348, 1850, 4133, 12292, 1935, 2]
// Exports: default

// Module 12291 (showMediaMessagePreviewActionSheet)
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
        let obj = importDefault(4133);
        obj = { channel, message, user, closeMediaModal: message.closeMediaModal };
        obj.openLazy(require(1935) /* maybeLoadBundle */(12292, dependencyMap.paths), "MediaMessagePreviewActionSheet", obj);
      }
    }
  }
};
