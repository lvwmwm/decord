// Module ID: 7569
// Function ID: 7570
// Name: isPrivateChannel
// Dependencies: [2]
// Exports: isPrivateChannel

// Module 7569 (isPrivateChannel)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_database/modules/messages/isPrivateChannel.tsx");

export const isPrivateChannel = function isPrivateChannel(basicChannel) {
  return null == basicChannel.guild_id;
};
