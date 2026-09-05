// Module ID: 11930
// Function ID: 11931
// Name: jumpToReferencedMessage
// Dependencies: [7456, 2]
// Exports: default

// Module 11930 (jumpToReferencedMessage)
import set from "set" /* 2 */;
import trackInviteDefault from "trackInvite" /* 7456 */;

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
