// Module ID: 15692
// Function ID: 120800
// Name: getRestrictedHiddenMediaCount
// Dependencies: [7714, 4501, 2]
// Exports: default

// Module 15692 (getRestrictedHiddenMediaCount)
let result = require("set").fileFinishedImporting("modules/message_request/getRestrictedHiddenMediaCount.tsx");

export default function getRestrictedHiddenMediaCount(message) {
  const result = require(7714) /* createGuildBreadcrumb */.maybeCreateSingleForwardForMessage(message);
  if (null != result) {
    message = result.messageSnapshot.message;
  }
  const sum = message.attachments.length + message.embeds.length;
  const obj = require(7714) /* createGuildBreadcrumb */;
  return sum + require(4501) /* getStickerPackPreviewSticker */.getMessageStickers(message).length;
};
