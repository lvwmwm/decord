// Module ID: 19067
// Function ID: 19068
// Name: getRestrictedHiddenMediaCount
// Dependencies: [14194, 6653, 2]
// Exports: default

// Module 19067 (getRestrictedHiddenMediaCount)
import formatMessageForwards from "formatMessageForwards" /* 14194 */;
import size from "module_2" /* 2 */;

let tmp;
const StickersUtils = tmp(6653);
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
