// Module ID: 6898
// Function ID: 6899
// Name: isPrivateChannel
// Dependencies: [2]
// Exports: isPrivateChannel

// Module 6898 (isPrivateChannel)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_database/modules/messages/isPrivateChannel.tsx");

export const isPrivateChannel = function isPrivateChannel(basicChannel) {
  return null == basicChannel.guild_id;
};
