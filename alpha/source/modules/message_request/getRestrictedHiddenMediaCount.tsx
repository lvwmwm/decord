// Module ID: 19574
// Function ID: 19575
// Name: getRestrictedHiddenMediaCount
// Dependencies: [9115, 6729, 2]
// Exports: default

// Module 19574 (getRestrictedHiddenMediaCount)
import formatMessageForwards from "formatMessageForwards" /* 9115 */;
import size from "module_2" /* 2 */;

let tmp;
const StickersUtils = tmp(6729);
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
