// Module ID: 5744
// Function ID: 5745
// Name: isPrivateChannel
// Dependencies: [2]
// Exports: isPrivateChannel

// Module 5744 (isPrivateChannel)
const result = require("set").fileFinishedImporting("modules/app_database/modules/messages/isPrivateChannel.tsx");

export const isPrivateChannel = function isPrivateChannel(basicChannel) {
  return null == basicChannel.guild_id;
};
