// Module ID: 17942
// Function ID: 17943
// Name: getRestrictedHiddenMediaCount
// Dependencies: [8190, 5965, 2]
// Exports: default

// Module 17942 (getRestrictedHiddenMediaCount)
import formatMessageForwards from "formatMessageForwards" /* 8190 */;
import size from "module_2" /* 2 */;

let tmp;
const StickersUtils = tmp(5965);
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
