// Module ID: 7069
// Function ID: 7070
// Name: isPrivateChannel
// Dependencies: [2]
// Exports: isPrivateChannel

// Module 7069 (isPrivateChannel)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_database/modules/messages/isPrivateChannel.tsx");

export const isPrivateChannel = function isPrivateChannel(basicChannel) {
  return null == basicChannel.guild_id;
};
