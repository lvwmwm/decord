// Module ID: 7576
// Function ID: 7577
// Name: isPrivateChannel
// Dependencies: [2]
// Exports: isPrivateChannel

// Module 7576 (isPrivateChannel)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_database/modules/messages/isPrivateChannel.tsx");

export const isPrivateChannel = function isPrivateChannel(basicChannel) {
  return null == basicChannel.guild_id;
};
