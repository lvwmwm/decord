// Module ID: 12130
// Function ID: 93447
// Name: showMediaMessagePreviewActionSheet
// Dependencies: []
// Exports: default

// Module 12130 (showMediaMessagePreviewActionSheet)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/media_viewer/native/components/message_preview/showMediaMessagePreviewActionSheet.tsx");

export default function showMediaMessagePreviewActionSheet(message) {
  message = message.message;
  const channel = channel.getChannel(message.channelId);
  if (null != channel) {
    if (null != message) {
      const user = user.getUser(message.author.id);
      if (null != user) {
        let obj = importDefault(dependencyMap[2]);
        obj = { channel, message, user, closeMediaModal: message.closeMediaModal };
        obj.openLazy(arg1(dependencyMap[4])(dependencyMap[3], dependencyMap.paths), "MediaMessagePreviewActionSheet", obj);
      }
    }
  }
};
