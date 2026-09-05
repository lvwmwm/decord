// Module ID: 7302
// Function ID: 7303
// Name: isForwardMessage
// Dependencies: [1074, 2]
// Exports: default, isForwardServerMessage

// Module 7302 (isForwardMessage)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;

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
