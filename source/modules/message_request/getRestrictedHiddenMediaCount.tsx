// Module ID: 15727
// Function ID: 15728
// Name: getRestrictedHiddenMediaCount
// Dependencies: [7737, 4524, 2]
// Exports: default

// Module 15727 (getRestrictedHiddenMediaCount)
let result = require("set").fileFinishedImporting("modules/message_request/getRestrictedHiddenMediaCount.tsx");

export default function getRestrictedHiddenMediaCount(message) {
  const result = require(7737) /* getForwardInfo */.maybeCreateSingleForwardForMessage(message);
  if (null != result) {
    message = result.messageSnapshot.message;
  }
  const sum = message.attachments.length + message.embeds.length;
  const obj = require(7737) /* getForwardInfo */;
  const tmp = require;
  return sum + require(4524) /* getStickerExtensionFromFormatType */.getMessageStickers(message).length;
};
