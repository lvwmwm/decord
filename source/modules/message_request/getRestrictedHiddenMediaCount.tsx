// Module ID: 15825
// Function ID: 15826
// Name: getRestrictedHiddenMediaCount
// Dependencies: [7845, 4589, 2]
// Exports: default

// Module 15825 (getRestrictedHiddenMediaCount)
let result = require("set").fileFinishedImporting("modules/message_request/getRestrictedHiddenMediaCount.tsx");

export default function getRestrictedHiddenMediaCount(message) {
  const result = require(7845) /* getForwardInfo */.maybeCreateSingleForwardForMessage(message);
  if (null != result) {
    message = result.messageSnapshot.message;
  }
  const sum = message.attachments.length + message.embeds.length;
  const obj = require(7845) /* getForwardInfo */;
  const tmp = require;
  return sum + require(4589) /* getStickerExtensionFromFormatType */.getMessageStickers(message).length;
};
