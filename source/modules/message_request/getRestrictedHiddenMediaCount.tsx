// Module ID: 15990
// Function ID: 15991
// Name: getRestrictedHiddenMediaCount
// Dependencies: [8065, 4638, 2]
// Exports: default

// Module 15990 (getRestrictedHiddenMediaCount)
let result = require("set").fileFinishedImporting("modules/message_request/getRestrictedHiddenMediaCount.tsx");

export default function getRestrictedHiddenMediaCount(message) {
  const result = require(8065) /* getForwardInfo */.maybeCreateSingleForwardForMessage(message);
  if (null != result) {
    message = result.messageSnapshot.message;
  }
  const sum = message.attachments.length + message.embeds.length;
  const obj = require(8065) /* getForwardInfo */;
  const tmp = require;
  return sum + require(4638) /* getStickerExtensionFromFormatType */.getMessageStickers(message).length;
};
