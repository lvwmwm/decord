// Module ID: 19397
// Function ID: 19398
// Name: getRestrictedHiddenMediaCount
// Dependencies: [8516, 6647, 2]
// Exports: default

// Module 19397 (getRestrictedHiddenMediaCount)
import formatMessageForwards from "formatMessageForwards" /* 8516 */;
import size from "module_2" /* 2 */;

let tmp;
const StickersUtils = tmp(6647);
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
