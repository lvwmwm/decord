// Module ID: 13621
// Function ID: 13622
// Name: jumpToReferencedMessage
// Dependencies: [7715, 2]
// Exports: default

// Module 13621 (jumpToReferencedMessage)
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7715 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/jumpToReferencedMessage.tsx");

export default function jumpToReferencedMessage(messageReference) {
  messageReference = messageReference.messageReference;
  let channel_id;
  if (messageReference != null) {
    channel_id = messageReference.channel_id;
  }
  const tmp2 = null != channel_id && null != messageReference.message_id;
  if (tmp2) {
    const obj3 = { channelId: null, messageId: null, flash: true, returnMessageId: messageReference.id };
    ({ channel_id: obj2.channelId, message_id: obj2.messageId } = messageReference);
    const obj = MessageActionCreatorsDefault;
    obj.jumpToMessage(obj3);
  }
};
