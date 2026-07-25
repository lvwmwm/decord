// Module ID: 11060
// Function ID: 85973
// Name: jumpToReferencedMessage
// Dependencies: [5685, 2]
// Exports: default

// Module 11060 (jumpToReferencedMessage)
const result = require("set").fileFinishedImporting("modules/messages/native/jumpToReferencedMessage.tsx");

export default function jumpToReferencedMessage(messageReference) {
  messageReference = messageReference.messageReference;
  let channel_id;
  if (null != messageReference) {
    channel_id = messageReference.channel_id;
  }
  if (tmp2) {
    let obj = importDefault(5685);
    obj = {};
    ({ channel_id: obj2.channelId, message_id: obj2.messageId } = messageReference);
    obj.flash = true;
    obj.returnMessageId = messageReference.id;
    obj.jumpToMessage(obj);
  }
};
