// Module ID: 7224
// Function ID: 7225
// Name: isForwardMessage
// Dependencies: [1087, 2]
// Exports: default, isForwardServerMessage

// Module 7224 (isForwardMessage)
import Constants from "Constants" /* 1087 */;
import size from "module_2" /* 2 */;

const MessageReferenceTypes = Constants.MessageReferenceTypes;
const result = size.fileFinishedImporting("modules/forwarding/isForwardMessage.tsx");

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
