// Module ID: 15973
// Function ID: 15974
// Name: getRestrictedHiddenMediaCount
// Dependencies: [8063, 4638, 2]
// Exports: default

// Module 15973 (getRestrictedHiddenMediaCount)
let result = require("set").fileFinishedImporting("modules/message_request/getRestrictedHiddenMediaCount.tsx");

export default function getRestrictedHiddenMediaCount(message) {
  const result = require(8063) /* getForwardInfo */.maybeCreateSingleForwardForMessage(message);
  if (null != result) {
    message = result.messageSnapshot.message;
  }
  const sum = message.attachments.length + message.embeds.length;
  const obj = require(8063) /* getForwardInfo */;
  const tmp = require;
  return sum + require(4638) /* getStickerExtensionFromFormatType */.getMessageStickers(message).length;
};
