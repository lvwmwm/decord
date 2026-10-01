// Module ID: 16723
// Function ID: 16724
// Name: getRestrictedHiddenMediaCount
// Dependencies: [7396, 5198, 2]
// Exports: default

// Module 16723 (getRestrictedHiddenMediaCount)
import formatMessageForwards from "formatMessageForwards" /* 7396 */;
import size from "module_2" /* 2 */;

let tmp;
const StickersUtils = tmp(5198);
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
