// Module ID: 19264
// Function ID: 19265
// Name: getRestrictedHiddenMediaCount
// Dependencies: [8553, 6695, 2]
// Exports: default

// Module 19264 (getRestrictedHiddenMediaCount)
import formatMessageForwards from "formatMessageForwards" /* 8553 */;
import size from "module_2" /* 2 */;

let tmp;
const StickersUtils = tmp(6695);
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
