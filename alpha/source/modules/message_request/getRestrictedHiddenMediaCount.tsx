// Module ID: 19257
// Function ID: 19258
// Name: getRestrictedHiddenMediaCount
// Dependencies: [14376, 6779, 2]
// Exports: default

// Module 19257 (getRestrictedHiddenMediaCount)
import formatMessageForwards from "formatMessageForwards" /* 14376 */;
import size from "module_2" /* 2 */;

let tmp;
const StickersUtils = tmp(6779);
let result = size.fileFinishedImporting("modules/message_request/getRestrictedHiddenMediaCount.tsx");

export default function getRestrictedHiddenMediaCount(message) {
  const obj = formatMessageForwards;
  const result = obj.maybeCreateSingleForwardForMessage(message);
  if (null != result) {
    message = result.messageSnapshot.message;
  }
  const sum = message.attachments.length + message.embeds.length;
  const tmpResult = StickersUtils;
  return sum + tmpResult.getMessageStickers(message).length;
};
