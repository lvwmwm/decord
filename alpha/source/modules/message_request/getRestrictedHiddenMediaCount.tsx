// Module ID: 19287
// Function ID: 19288
// Name: getRestrictedHiddenMediaCount
// Dependencies: [8504, 6640, 2]
// Exports: default

// Module 19287 (getRestrictedHiddenMediaCount)
import formatMessageForwards from "formatMessageForwards" /* 8504 */;
import size from "module_2" /* 2 */;

let tmp;
const StickersUtils = tmp(6640);
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
