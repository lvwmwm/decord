// Module ID: 5026
// Function ID: 5027
// Name: isForwardMessage
// Dependencies: [676, 2]
// Exports: default, isForwardServerMessage

// Module 5026 (isForwardMessage)
import { MessageReferenceTypes } from "ME";

const result = require("set").fileFinishedImporting("modules/forwarding/isForwardMessage.tsx");

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
