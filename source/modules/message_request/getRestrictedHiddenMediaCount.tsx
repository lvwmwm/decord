// Module ID: 16057
// Function ID: 16058
// Name: getRestrictedHiddenMediaCount
// Dependencies: [8108, 4679, 2]
// Exports: default

// Module 16057 (getRestrictedHiddenMediaCount)
let result = require("set").fileFinishedImporting("modules/message_request/getRestrictedHiddenMediaCount.tsx");

export default function getRestrictedHiddenMediaCount(message) {
  const result = require(8108) /* getForwardInfo */.maybeCreateSingleForwardForMessage(message);
  if (null != result) {
    message = result.messageSnapshot.message;
  }
  const sum = message.attachments.length + message.embeds.length;
  const obj = require(8108) /* getForwardInfo */;
  const tmp = require;
  return sum + require(4679) /* getStickerExtensionFromFormatType */.getMessageStickers(message).length;
};
