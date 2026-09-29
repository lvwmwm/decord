// Module ID: 16911
// Function ID: 16912
// Name: getRestrictedHiddenMediaCount
// Dependencies: [7561, 5364, 2]
// Exports: default

// Module 16911 (getRestrictedHiddenMediaCount)
import StickersUtils from "StickersUtils" /* 5364 */;
import formatMessageForwards from "formatMessageForwards" /* 7561 */;
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
