// Module ID: 11099
// Function ID: 86101
// Name: jumpToReferencedMessage
// Dependencies: [5695, 2]
// Exports: default

// Module 11099 (jumpToReferencedMessage)
const result = require("set").fileFinishedImporting("modules/messages/native/jumpToReferencedMessage.tsx");

export default function jumpToReferencedMessage(messageReference) {
  messageReference = messageReference.messageReference;
  let channel_id;
  if (null != messageReference) {
    channel_id = messageReference.channel_id;
  }
  if (tmp2) {
    let obj = importDefault(5695);
    obj = {};
    ({ channel_id: obj2.channelId, message_id: obj2.messageId } = messageReference);
    obj.flash = true;
    obj.returnMessageId = messageReference.id;
    obj.jumpToMessage(obj);
  }
};
