// Module ID: 6839
// Function ID: 6840
// Name: isPrivateChannel
// Dependencies: [2]
// Exports: isPrivateChannel

// Module 6839 (isPrivateChannel)
const result = require("set").fileFinishedImporting("modules/app_database/modules/messages/isPrivateChannel.tsx");

export const isPrivateChannel = function isPrivateChannel(basicChannel) {
  return null == basicChannel.guild_id;
};
