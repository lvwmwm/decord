// Module ID: 19359
// Function ID: 19360
// Name: getRestrictedHiddenMediaCount
// Dependencies: [8483, 6615, 2]
// Exports: default

// Module 19359 (getRestrictedHiddenMediaCount)
import formatMessageForwards from "formatMessageForwards" /* 8483 */;
import size from "module_2" /* 2 */;

let tmp;
const StickersUtils = tmp(6615);
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
