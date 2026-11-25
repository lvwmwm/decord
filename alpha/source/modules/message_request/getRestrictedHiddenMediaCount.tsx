// Module ID: 19179
// Function ID: 19180
// Name: getRestrictedHiddenMediaCount
// Dependencies: [14317, 6748, 2]
// Exports: default

// Module 19179 (getRestrictedHiddenMediaCount)
import formatMessageForwards from "formatMessageForwards" /* 14317 */;
import size from "module_2" /* 2 */;

let tmp;
const StickersUtils = tmp(6748);
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
