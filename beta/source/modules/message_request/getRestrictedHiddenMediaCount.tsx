// Module ID: 16725
// Function ID: 16726
// Name: getRestrictedHiddenMediaCount
// Dependencies: [7400, 5199, 2]
// Exports: default

// Module 16725 (getRestrictedHiddenMediaCount)
import formatMessageForwards from "formatMessageForwards" /* 7400 */;
import size from "module_2" /* 2 */;

let tmp;
const StickersUtils = tmp(5199);
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
