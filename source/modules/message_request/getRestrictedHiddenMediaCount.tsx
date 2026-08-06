// Module ID: 15865
// Function ID: 15866
// Name: getRestrictedHiddenMediaCount
// Dependencies: [7986, 4619, 2]
// Exports: default

// Module 15865 (getRestrictedHiddenMediaCount)
let result = require("set").fileFinishedImporting("modules/message_request/getRestrictedHiddenMediaCount.tsx");

export default function getRestrictedHiddenMediaCount(message) {
  const result = require(7986) /* getForwardInfo */.maybeCreateSingleForwardForMessage(message);
  if (null != result) {
    message = result.messageSnapshot.message;
  }
  const sum = message.attachments.length + message.embeds.length;
  const obj = require(7986) /* getForwardInfo */;
  const tmp = require;
  return sum + require(4619) /* getStickerExtensionFromFormatType */.getMessageStickers(message).length;
};
