// Module ID: 15613
// Function ID: 120370
// Name: sortChannelIds
// Dependencies: [21, 2]
// Exports: sortChannelIds

// Module 15613 (sortChannelIds)
const result = require("set").fileFinishedImporting("modules/message_request/MessageRequestStoreUtils.tsx");

export const sortChannelIds = function sortChannelIds(found) {
  const sorted = found.sort((lastMessageId, lastMessageId2) => outer1_0(outer1_1[0]).compare(lastMessageId.lastMessageId, lastMessageId2.lastMessageId));
  return sorted.reverse();
};
