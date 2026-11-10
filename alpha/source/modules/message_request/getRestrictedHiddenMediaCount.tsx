// Module ID: 19388
// Function ID: 19389
// Name: getRestrictedHiddenMediaCount
// Dependencies: [8487, 6617, 2]
// Exports: default

// Module 19388 (getRestrictedHiddenMediaCount)
import formatMessageForwards from "formatMessageForwards" /* 8487 */;
import size from "module_2" /* 2 */;

let tmp;
const StickersUtils = tmp(6617);
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
