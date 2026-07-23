// Module ID: 15584
// Function ID: 120147
// Name: getRestrictedHiddenMediaCount
// Dependencies: [7643, 4466, 2]
// Exports: default

// Module 15584 (getRestrictedHiddenMediaCount)
let result = require("set").fileFinishedImporting("modules/message_request/getRestrictedHiddenMediaCount.tsx");

export default function getRestrictedHiddenMediaCount(message) {
  const result = require(7643) /* createGuildBreadcrumb */.maybeCreateSingleForwardForMessage(message);
  if (null != result) {
    message = result.messageSnapshot.message;
  }
  const sum = message.attachments.length + message.embeds.length;
  const obj = require(7643) /* createGuildBreadcrumb */;
  return sum + require(4466) /* getStickerPackPreviewSticker */.getMessageStickers(message).length;
};
