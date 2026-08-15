// Module ID: 11116
// Function ID: 11117
// Name: jumpToReferencedMessage
// Dependencies: [7427, 2]
// Exports: default

// Module 11116 (jumpToReferencedMessage)
const result = require("set").fileFinishedImporting("modules/messages/native/jumpToReferencedMessage.tsx");

export default function jumpToReferencedMessage(messageReference) {
  messageReference = messageReference.messageReference;
  let channel_id;
  if (messageReference != null) {
    channel_id = messageReference.channel_id;
  }
  if (tmp2) {
    let obj = importDefault(7427);
    obj = { channelId: null, messageId: null, flash: true, returnMessageId: null };
    ({ channel_id: obj2[0], message_id: obj2[1] } = messageReference);
    obj[3] = messageReference.id;
    obj.jumpToMessage(obj);
  }
};
