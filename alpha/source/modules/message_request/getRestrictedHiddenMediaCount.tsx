// Module ID: 18873
// Function ID: 18874
// Name: getRestrictedHiddenMediaCount
// Dependencies: [8367, 6547, 2]
// Exports: default

// Module 18873 (getRestrictedHiddenMediaCount)
import formatMessageForwards from "formatMessageForwards" /* 8367 */;
import size from "module_2" /* 2 */;

let tmp;
const StickersUtils = tmp(6547);
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
