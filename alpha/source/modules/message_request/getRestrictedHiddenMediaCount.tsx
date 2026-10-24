// Module ID: 18351
// Function ID: 18352
// Name: getRestrictedHiddenMediaCount
// Dependencies: [8312, 6488, 2]
// Exports: default

// Module 18351 (getRestrictedHiddenMediaCount)
import formatMessageForwards from "formatMessageForwards" /* 8312 */;
import size from "module_2" /* 2 */;

let tmp;
const StickersUtils = tmp(6488);
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
