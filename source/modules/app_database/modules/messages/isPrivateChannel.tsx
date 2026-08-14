// Module ID: 7012
// Function ID: 7013
// Name: isPrivateChannel
// Dependencies: [2]
// Exports: isPrivateChannel

// Module 7012 (isPrivateChannel)
const result = require("set").fileFinishedImporting("modules/app_database/modules/messages/isPrivateChannel.tsx");

export const isPrivateChannel = function isPrivateChannel(basicChannel) {
  return null == basicChannel.guild_id;
};
