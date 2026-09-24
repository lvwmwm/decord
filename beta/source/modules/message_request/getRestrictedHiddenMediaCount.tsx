// Module ID: 17383
// Function ID: 17384
// Name: getRestrictedHiddenMediaCount
// Dependencies: [8249, 5137, 2]
// Exports: default

// Module 17383 (getRestrictedHiddenMediaCount)
import StickersUtils from "StickersUtils" /* 5137 */;
import formatMessageForwards from "formatMessageForwards" /* 8249 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/message_request/getRestrictedHiddenMediaCount.tsx");

export default function getRestrictedHiddenMediaCount(message) {
  const result = formatMessageForwards.maybeCreateSingleForwardForMessage(message);
  if (null != result) {
    message = result.messageSnapshot.message;
  }
  const sum = message.attachments.length + message.embeds.length;
  return sum + StickersUtils.getMessageStickers(message).length;
};
