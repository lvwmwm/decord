// Module ID: 19241
// Function ID: 19242
// Name: getRestrictedHiddenMediaCount
// Dependencies: [14369, 6779, 2]
// Exports: default

// Module 19241 (getRestrictedHiddenMediaCount)
import formatMessageForwards from "formatMessageForwards" /* 14369 */;
import size from "module_2" /* 2 */;

let tmp;
const StickersUtils = tmp(6779);
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
