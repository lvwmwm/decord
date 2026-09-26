// Module ID: 16719
// Function ID: 16720
// Name: getRestrictedHiddenMediaCount
// Dependencies: [7396, 5198, 2]
// Exports: default

// Module 16719 (getRestrictedHiddenMediaCount)
import StickersUtils from "StickersUtils" /* 5198 */;
import formatMessageForwards from "formatMessageForwards" /* 7396 */;
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
