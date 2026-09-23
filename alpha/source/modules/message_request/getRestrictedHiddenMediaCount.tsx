// Module ID: 17450
// Function ID: 17451
// Name: getRestrictedHiddenMediaCount
// Dependencies: [8298, 5188, 2]
// Exports: default

// Module 17450 (getRestrictedHiddenMediaCount)
import StickersUtils from "StickersUtils" /* 5188 */;
import formatMessageForwards from "formatMessageForwards" /* 8298 */;
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
