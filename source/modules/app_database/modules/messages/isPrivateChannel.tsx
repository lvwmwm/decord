// Module ID: 5074
// Function ID: 5075
// Name: isPrivateChannel
// Dependencies: [2]
// Exports: isPrivateChannel

// Module 5074 (isPrivateChannel)
const result = require("set").fileFinishedImporting("modules/app_database/modules/messages/isPrivateChannel.tsx");

export const isPrivateChannel = function isPrivateChannel(basicChannel) {
  return null == basicChannel.guild_id;
};
