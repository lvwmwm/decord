// Module ID: 15889
// Function ID: 15890
// Name: getRestrictedHiddenMediaCount
// Dependencies: [8003, 4636, 2]
// Exports: default

// Module 15889 (getRestrictedHiddenMediaCount)
let result = require("set").fileFinishedImporting("modules/message_request/getRestrictedHiddenMediaCount.tsx");

export default function getRestrictedHiddenMediaCount(message) {
  const result = require(8003) /* getForwardInfo */.maybeCreateSingleForwardForMessage(message);
  if (null != result) {
    message = result.messageSnapshot.message;
  }
  const sum = message.attachments.length + message.embeds.length;
  const obj = require(8003) /* getForwardInfo */;
  const tmp = require;
  return sum + require(4636) /* getStickerExtensionFromFormatType */.getMessageStickers(message).length;
};
