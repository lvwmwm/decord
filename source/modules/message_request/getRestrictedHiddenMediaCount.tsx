// Module ID: 15653
// Function ID: 120644
// Name: getRestrictedHiddenMediaCount
// Dependencies: [7678, 4467, 2]
// Exports: default

// Module 15653 (getRestrictedHiddenMediaCount)
let result = require("set").fileFinishedImporting("modules/message_request/getRestrictedHiddenMediaCount.tsx");

export default function getRestrictedHiddenMediaCount(message) {
  const result = require(7678) /* createGuildBreadcrumb */.maybeCreateSingleForwardForMessage(message);
  if (null != result) {
    message = result.messageSnapshot.message;
  }
  const sum = message.attachments.length + message.embeds.length;
  const obj = require(7678) /* createGuildBreadcrumb */;
  return sum + require(4467) /* getStickerPackPreviewSticker */.getMessageStickers(message).length;
};
