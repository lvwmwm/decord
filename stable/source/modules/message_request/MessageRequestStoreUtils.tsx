// Module ID: 16997
// Function ID: 16998
// Name: MessageRequestStoreUtils
// Dependencies: [11, 2]
// Exports: sortChannelIds

// Module 16997 (MessageRequestStoreUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/MessageRequestStoreUtils.tsx");

export const sortChannelIds = function sortChannelIds(found) {
  const sorted = found.sort((lastMessageId, lastMessageId2) => SnowflakeUtilsDefault.compare(lastMessageId.lastMessageId, lastMessageId2.lastMessageId));
  return sorted.reverse();
};
