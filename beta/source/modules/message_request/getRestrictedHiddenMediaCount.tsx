// Module ID: 17373
// Function ID: 17374
// Name: getRestrictedHiddenMediaCount
// Dependencies: [8244, 5135, 2]
// Exports: default

// Module 17373 (getRestrictedHiddenMediaCount)
import StickersUtils from "StickersUtils" /* 5135 */;
import formatMessageForwards from "formatMessageForwards" /* 8244 */;
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
