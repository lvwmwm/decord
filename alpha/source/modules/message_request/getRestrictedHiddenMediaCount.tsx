// Module ID: 17535
// Function ID: 17536
// Name: getRestrictedHiddenMediaCount
// Dependencies: [7954, 5746, 2]
// Exports: default

// Module 17535 (getRestrictedHiddenMediaCount)
import formatMessageForwards from "formatMessageForwards" /* 7954 */;
import size from "module_2" /* 2 */;

let tmp;
const StickersUtils = tmp(5746);
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
