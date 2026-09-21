// Module ID: 17372
// Function ID: 17373
// Name: getRestrictedHiddenMediaCount
// Dependencies: [8217, 5105, 2]
// Exports: default

// Module 17372 (getRestrictedHiddenMediaCount)
import StickersUtils from "StickersUtils" /* 5105 */;
import formatMessageForwards from "formatMessageForwards" /* 8217 */;
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
