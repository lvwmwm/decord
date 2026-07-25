// Module ID: 5856
// Function ID: 51672
// Name: isForwardMessage
// Dependencies: [653, 2]
// Exports: default, isForwardServerMessage

// Module 5856 (isForwardMessage)
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
