// Module ID: 17473
// Function ID: 17474
// Name: getRestrictedHiddenMediaCount
// Dependencies: [8302, 5190, 2]
// Exports: default

// Module 17473 (getRestrictedHiddenMediaCount)
import StickersUtils from "StickersUtils" /* 5190 */;
import formatMessageForwards from "formatMessageForwards" /* 8302 */;
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
