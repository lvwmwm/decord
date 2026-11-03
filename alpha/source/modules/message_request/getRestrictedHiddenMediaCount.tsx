// Module ID: 19147
// Function ID: 19148
// Name: getRestrictedHiddenMediaCount
// Dependencies: [8536, 6680, 2]
// Exports: default

// Module 19147 (getRestrictedHiddenMediaCount)
import formatMessageForwards from "formatMessageForwards" /* 8536 */;
import size from "module_2" /* 2 */;

let tmp;
const StickersUtils = tmp(6680);
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
