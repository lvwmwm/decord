// Module ID: 17976
// Function ID: 17977
// Name: getRestrictedHiddenMediaCount
// Dependencies: [8193, 5967, 2]
// Exports: default

// Module 17976 (getRestrictedHiddenMediaCount)
import formatMessageForwards from "formatMessageForwards" /* 8193 */;
import size from "module_2" /* 2 */;

let tmp;
const StickersUtils = tmp(5967);
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
