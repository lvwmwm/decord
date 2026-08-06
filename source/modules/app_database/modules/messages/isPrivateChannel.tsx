// Module ID: 6863
// Function ID: 6864
// Name: isPrivateChannel
// Dependencies: [2]
// Exports: isPrivateChannel

// Module 6863 (isPrivateChannel)
const result = require("set").fileFinishedImporting("modules/app_database/modules/messages/isPrivateChannel.tsx");

export const isPrivateChannel = function isPrivateChannel(basicChannel) {
  return null == basicChannel.guild_id;
};
