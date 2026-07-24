// Module ID: 6715
// Function ID: 52227
// Name: isPrivateChannel
// Dependencies: [2]
// Exports: isPrivateChannel

// Module 6715 (isPrivateChannel)
const result = require("set").fileFinishedImporting("modules/app_database/modules/messages/isPrivateChannel.tsx");

export const isPrivateChannel = function isPrivateChannel(basicChannel) {
  return null == basicChannel.guild_id;
};
