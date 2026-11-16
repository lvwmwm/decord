// Module ID: 19769
// Function ID: 19770
// Name: getRestrictedHiddenMediaCount
// Dependencies: [9182, 6782, 2]
// Exports: default

// Module 19769 (getRestrictedHiddenMediaCount)
import formatMessageForwards from "formatMessageForwards" /* 9182 */;
import size from "module_2" /* 2 */;

let tmp;
const StickersUtils = tmp(6782);
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
