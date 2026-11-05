// Module ID: 19295
// Function ID: 19296
// Name: getRestrictedHiddenMediaCount
// Dependencies: [8558, 6698, 2]
// Exports: default

// Module 19295 (getRestrictedHiddenMediaCount)
import formatMessageForwards from "formatMessageForwards" /* 8558 */;
import size from "module_2" /* 2 */;

let tmp;
const StickersUtils = tmp(6698);
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
