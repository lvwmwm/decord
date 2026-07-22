// Module ID: 5674
// Function ID: 48752
// Name: isForwardMessage
// Dependencies: []
// Exports: default, isForwardServerMessage

// Module 5674 (isForwardMessage)
const MessageReferenceTypes = require(dependencyMap[0]).MessageReferenceTypes;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/forwarding/isForwardMessage.tsx");

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
