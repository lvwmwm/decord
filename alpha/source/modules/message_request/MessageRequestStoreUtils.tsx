// Module ID: 17088
// Function ID: 17089
// Name: MessageRequestStoreUtils
// Dependencies: [11, 2]
// Exports: sortChannelIds

// Module 17088 (MessageRequestStoreUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/MessageRequestStoreUtils.tsx");

export const sortChannelIds = function sortChannelIds(found) {
  const sorted = found.sort((lastMessageId, lastMessageId2) => {
    const obj = SnowflakeUtilsDefault;
    return obj.compare(lastMessageId.lastMessageId, lastMessageId2.lastMessageId);
  });
  return sorted.reverse();
};
