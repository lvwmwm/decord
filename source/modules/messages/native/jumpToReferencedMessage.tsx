// Module ID: 11570
// Function ID: 11571
// Name: jumpToReferencedMessage
// Dependencies: [7129, 2]
// Exports: default

// Module 11570 (jumpToReferencedMessage)
import set from "set" /* 2 */;
import trackInviteDefault from "trackInvite" /* 7129 */;

const result = set.fileFinishedImporting("modules/messages/native/jumpToReferencedMessage.tsx");

export default function jumpToReferencedMessage(messageReference) {
  messageReference = messageReference.messageReference;
  let channel_id;
  if (messageReference != null) {
    channel_id = messageReference.channel_id;
  }
  if (tmp2) {
    let obj = trackInviteDefault;
    obj = { channelId: null, messageId: null, flash: true, returnMessageId: null };
    ({ channel_id: obj2[0], message_id: obj2[1] } = messageReference);
    obj[3] = messageReference.id;
    obj.jumpToMessage(obj);
  }
};
