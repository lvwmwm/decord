// Module ID: 15631
// Function ID: 120469
// Name: getRestrictedHiddenMediaCount
// Dependencies: [7732, 4466, 2]
// Exports: default

// Module 15631 (getRestrictedHiddenMediaCount)
let result = require("set").fileFinishedImporting("modules/message_request/getRestrictedHiddenMediaCount.tsx");

export default function getRestrictedHiddenMediaCount(message) {
  const result = require(7732) /* createGuildBreadcrumb */.maybeCreateSingleForwardForMessage(message);
  if (null != result) {
    message = result.messageSnapshot.message;
  }
  const sum = message.attachments.length + message.embeds.length;
  const obj = require(7732) /* createGuildBreadcrumb */;
  return sum + require(4466) /* getStickerPackPreviewSticker */.getMessageStickers(message).length;
};
