// Module ID: 16047
// Function ID: 16048
// Name: getRestrictedHiddenMediaCount
// Dependencies: [8104, 4678, 2]
// Exports: default

// Module 16047 (getRestrictedHiddenMediaCount)
let result = require("set").fileFinishedImporting("modules/message_request/getRestrictedHiddenMediaCount.tsx");

export default function getRestrictedHiddenMediaCount(message) {
  const result = require(8104) /* getForwardInfo */.maybeCreateSingleForwardForMessage(message);
  if (null != result) {
    message = result.messageSnapshot.message;
  }
  const sum = message.attachments.length + message.embeds.length;
  const obj = require(8104) /* getForwardInfo */;
  const tmp = require;
  return sum + require(4678) /* getStickerExtensionFromFormatType */.getMessageStickers(message).length;
};
