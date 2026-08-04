// Module ID: 6851
// Function ID: 6852
// Name: isPrivateChannel
// Dependencies: [2]
// Exports: isPrivateChannel

// Module 6851 (isPrivateChannel)
const result = require("set").fileFinishedImporting("modules/app_database/modules/messages/isPrivateChannel.tsx");

export const isPrivateChannel = function isPrivateChannel(basicChannel) {
  return null == basicChannel.guild_id;
};
