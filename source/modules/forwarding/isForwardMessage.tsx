// Module ID: 7240
// Function ID: 7241
// Name: isForwardMessage
// Dependencies: [673, 2]
// Exports: default, isForwardServerMessage

// Module 7240 (isForwardMessage)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;

const MessageReferenceTypes = ME.MessageReferenceTypes;
const result = set.fileFinishedImporting("modules/forwarding/isForwardMessage.tsx");

export default function isForwardMessage(messageReference) {
  messageReference = messageReference.messageReference;
  let type;
  if (messageReference != null) {
    type = messageReference.type;
  }
  return type === MessageReferenceTypes.FORWARD;
};
export const isForwardServerMessage = function isForwardServerMessage(message_reference) {
  message_reference = message_reference.message_reference;
  let type;
  if (message_reference != null) {
    type = message_reference.type;
  }
  return type === MessageReferenceTypes.FORWARD;
};
