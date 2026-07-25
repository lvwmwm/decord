// Module ID: 12247
// Function ID: 95647
// Name: showMediaMessagePreviewActionSheet
// Dependencies: [1348, 1850, 4099, 12248, 1935, 2]
// Exports: default

// Module 12247 (showMediaMessagePreviewActionSheet)
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
        let obj = importDefault(4099);
        obj = { channel, message, user, closeMediaModal: message.closeMediaModal };
        obj.openLazy(require(1935) /* maybeLoadBundle */(12248, dependencyMap.paths), "MediaMessagePreviewActionSheet", obj);
      }
    }
  }
};
