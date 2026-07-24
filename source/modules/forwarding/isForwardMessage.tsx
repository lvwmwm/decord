// Module ID: 5679
// Function ID: 48789
// Name: isForwardMessage
// Dependencies: [653, 2]
// Exports: default, isForwardServerMessage

// Module 5679 (isForwardMessage)
import { MessageReferenceTypes } from "ME";

const result = require("set").fileFinishedImporting("modules/forwarding/isForwardMessage.tsx");

export default function isForwardMessage(messageReference) {
  messageReference = messageReference.messageReference;
  let type;
  if (null != messageReference) {
    type = messageReference.type;
  }
  return type === MessageReferenceTypes.FORWARD;
};
export const isForwardServerMessage = function isForwardServerMessage(message_reference) {
  message_reference = message_reference.message_reference;
  let type;
  if (null != message_reference) {
    type = message_reference.type;
  }
  return type === MessageReferenceTypes.FORWARD;
};
