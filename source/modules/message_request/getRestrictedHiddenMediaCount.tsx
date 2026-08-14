// Module ID: 16066
// Function ID: 16067
// Name: getRestrictedHiddenMediaCount
// Dependencies: [8129, 4701, 2]
// Exports: default

// Module 16066 (getRestrictedHiddenMediaCount)
let result = require("set").fileFinishedImporting("modules/message_request/getRestrictedHiddenMediaCount.tsx");

export default function getRestrictedHiddenMediaCount(message) {
  const result = require(8129) /* getForwardInfo */.maybeCreateSingleForwardForMessage(message);
  if (null != result) {
    message = result.messageSnapshot.message;
  }
  const sum = message.attachments.length + message.embeds.length;
  const obj = require(8129) /* getForwardInfo */;
  const tmp = require;
  return sum + require(4701) /* getStickerExtensionFromFormatType */.getMessageStickers(message).length;
};
