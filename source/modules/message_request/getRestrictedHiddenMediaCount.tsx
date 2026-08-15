// Module ID: 16116
// Function ID: 16117
// Name: getRestrictedHiddenMediaCount
// Dependencies: [8179, 4823, 2]
// Exports: default

// Module 16116 (getRestrictedHiddenMediaCount)
let result = require("set").fileFinishedImporting("modules/message_request/getRestrictedHiddenMediaCount.tsx");

export default function getRestrictedHiddenMediaCount(message) {
  const result = require(8179) /* getForwardInfo */.maybeCreateSingleForwardForMessage(message);
  if (null != result) {
    message = result.messageSnapshot.message;
  }
  const sum = message.attachments.length + message.embeds.length;
  const obj = require(8179) /* getForwardInfo */;
  const tmp = require;
  return sum + require(4823) /* getStickerExtensionFromFormatType */.getMessageStickers(message).length;
};
