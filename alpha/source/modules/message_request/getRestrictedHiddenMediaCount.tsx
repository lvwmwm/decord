// Module ID: 19077
// Function ID: 19078
// Name: getRestrictedHiddenMediaCount
// Dependencies: [8573, 6265, 2]
// Exports: default

// Module 19077 (getRestrictedHiddenMediaCount)
import formatMessageForwards from "formatMessageForwards" /* 8573 */;
import size from "module_2" /* 2 */;

let tmp;
const StickersUtils = tmp(6265);
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
