// Module ID: 6942
// Function ID: 6943
// Name: isPrivateChannel
// Dependencies: [2]
// Exports: isPrivateChannel

// Module 6942 (isPrivateChannel)
const result = require("set").fileFinishedImporting("modules/app_database/modules/messages/isPrivateChannel.tsx");

export const isPrivateChannel = function isPrivateChannel(basicChannel) {
  return null == basicChannel.guild_id;
};
