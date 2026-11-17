// Module ID: 19814
// Function ID: 19815
// Name: getRestrictedHiddenMediaCount
// Dependencies: [9193, 6790, 2]
// Exports: default

// Module 19814 (getRestrictedHiddenMediaCount)
import formatMessageForwards from "formatMessageForwards" /* 9193 */;
import size from "module_2" /* 2 */;

let tmp;
const StickersUtils = tmp(6790);
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
