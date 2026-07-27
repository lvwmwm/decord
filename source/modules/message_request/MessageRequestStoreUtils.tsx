// Module ID: 15635
// Function ID: 120545
// Name: sortChannelIds
// Dependencies: [21, 2]
// Exports: sortChannelIds

// Module 15635 (sortChannelIds)
const result = require("set").fileFinishedImporting("modules/message_request/MessageRequestStoreUtils.tsx");

export const sortChannelIds = function sortChannelIds(found) {
  const sorted = found.sort((lastMessageId, lastMessageId2) => outer1_0(outer1_1[0]).compare(lastMessageId.lastMessageId, lastMessageId2.lastMessageId));
  return sorted.reverse();
};
