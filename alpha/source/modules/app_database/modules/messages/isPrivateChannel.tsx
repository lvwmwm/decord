// Module ID: 7538
// Function ID: 7539
// Name: isPrivateChannel
// Dependencies: [2]
// Exports: isPrivateChannel

// Module 7538 (isPrivateChannel)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_database/modules/messages/isPrivateChannel.tsx");

export const isPrivateChannel = function isPrivateChannel(basicChannel) {
  return null == basicChannel.guild_id;
};
