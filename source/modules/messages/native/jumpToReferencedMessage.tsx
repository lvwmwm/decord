// Module ID: 11101
// Function ID: 86340
// Name: jumpToReferencedMessage
// Dependencies: [6691, 2]
// Exports: default

// Module 11101 (jumpToReferencedMessage)
const result = require("set").fileFinishedImporting("modules/messages/native/jumpToReferencedMessage.tsx");

export default function jumpToReferencedMessage(messageReference) {
  messageReference = messageReference.messageReference;
  let channel_id;
  if (null != messageReference) {
    channel_id = messageReference.channel_id;
  }
  if (tmp2) {
    let obj = importDefault(6691);
    obj = {};
    ({ channel_id: obj2.channelId, message_id: obj2.messageId } = messageReference);
    obj.flash = true;
    obj.returnMessageId = messageReference.id;
    obj.jumpToMessage(obj);
  }
};
