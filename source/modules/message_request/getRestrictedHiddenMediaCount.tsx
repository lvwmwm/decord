// Module ID: 16327
// Function ID: 16328
// Name: getRestrictedHiddenMediaCount
// Dependencies: [8282, 4804, 2]
// Exports: default

// Module 16327 (getRestrictedHiddenMediaCount)
import set from "set" /* 2 */;
import getStickerExtensionFromFormatType from "getStickerExtensionFromFormatType" /* 4804 */;
import getForwardInfo from "getForwardInfo" /* 8282 */;

let result = set.fileFinishedImporting("modules/message_request/getRestrictedHiddenMediaCount.tsx");

export default function getRestrictedHiddenMediaCount(message) {
  const result = getForwardInfo.maybeCreateSingleForwardForMessage(message);
  if (null != result) {
    message = result.messageSnapshot.message;
  }
  const sum = message.attachments.length + message.embeds.length;
  const obj = getForwardInfo;
  const tmp = require;
  return sum + getStickerExtensionFromFormatType.getMessageStickers(message).length;
};
