// Module ID: 15721
// Function ID: 15722
// Name: getRestrictedHiddenMediaCount
// Dependencies: [7734, 4524, 2]
// Exports: default

// Module 15721 (getRestrictedHiddenMediaCount)
let result = require("set").fileFinishedImporting("modules/message_request/getRestrictedHiddenMediaCount.tsx");

export default function getRestrictedHiddenMediaCount(message) {
  const result = require(7734) /* getForwardInfo */.maybeCreateSingleForwardForMessage(message);
  if (null != result) {
    message = result.messageSnapshot.message;
  }
  const sum = message.attachments.length + message.embeds.length;
  const obj = require(7734) /* getForwardInfo */;
  const tmp = require;
  return sum + require(4524) /* getStickerExtensionFromFormatType */.getMessageStickers(message).length;
};
