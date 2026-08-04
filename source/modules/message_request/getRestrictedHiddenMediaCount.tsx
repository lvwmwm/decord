// Module ID: 15844
// Function ID: 15845
// Name: getRestrictedHiddenMediaCount
// Dependencies: [7873, 4619, 2]
// Exports: default

// Module 15844 (getRestrictedHiddenMediaCount)
let result = require("set").fileFinishedImporting("modules/message_request/getRestrictedHiddenMediaCount.tsx");

export default function getRestrictedHiddenMediaCount(message) {
  const result = require(7873) /* getForwardInfo */.maybeCreateSingleForwardForMessage(message);
  if (null != result) {
    message = result.messageSnapshot.message;
  }
  const sum = message.attachments.length + message.embeds.length;
  const obj = require(7873) /* getForwardInfo */;
  const tmp = require;
  return sum + require(4619) /* getStickerExtensionFromFormatType */.getMessageStickers(message).length;
};
