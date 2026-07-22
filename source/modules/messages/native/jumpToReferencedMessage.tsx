// Module ID: 11064
// Function ID: 86101
// Name: jumpToReferencedMessage
// Dependencies: [4294967295, 0]
// Exports: default

// Module 11064 (jumpToReferencedMessage)
const result = require("__exportStarResult1").fileFinishedImporting("modules/messages/native/jumpToReferencedMessage.tsx");

export default function jumpToReferencedMessage(messageReference) {
  messageReference = messageReference.messageReference;
  let channel_id;
  if (null != messageReference) {
    channel_id = messageReference.channel_id;
  }
  if (tmp2) {
    let obj = importDefault(dependencyMap[0]);
    obj = {};
    ({ channel_id: obj2.channelId, message_id: obj2.messageId } = messageReference);
    obj.flash = true;
    obj.returnMessageId = messageReference.id;
    obj.jumpToMessage(obj);
  }
};
