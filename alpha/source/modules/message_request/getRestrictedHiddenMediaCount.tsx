// Module ID: 17702
// Function ID: 17703
// Name: getRestrictedHiddenMediaCount
// Dependencies: [7980, 5754, 2]
// Exports: default

// Module 17702 (getRestrictedHiddenMediaCount)
import formatMessageForwards from "formatMessageForwards" /* 7980 */;
import size from "module_2" /* 2 */;

let tmp;
const StickersUtils = tmp(5754);
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
