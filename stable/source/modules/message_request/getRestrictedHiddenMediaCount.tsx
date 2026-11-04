// Module ID: 18393
// Function ID: 18394
// Name: getRestrictedHiddenMediaCount
// Dependencies: [8344, 6520, 2]
// Exports: default

// Module 18393 (getRestrictedHiddenMediaCount)
import formatMessageForwards from "formatMessageForwards" /* 8344 */;
import size from "module_2" /* 2 */;

let tmp;
const StickersUtils = tmp(6520);
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
