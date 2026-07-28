// Module ID: 5721
// Function ID: 49397
// Name: isPrivateChannel
// Dependencies: [2]
// Exports: isPrivateChannel

// Module 5721 (isPrivateChannel)
const result = require("set").fileFinishedImporting("modules/app_database/modules/messages/isPrivateChannel.tsx");

export const isPrivateChannel = function isPrivateChannel(basicChannel) {
  return null == basicChannel.guild_id;
};
