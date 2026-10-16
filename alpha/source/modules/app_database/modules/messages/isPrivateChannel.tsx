// Module ID: 7423
// Function ID: 7424
// Name: isPrivateChannel
// Dependencies: [2]
// Exports: isPrivateChannel

// Module 7423 (isPrivateChannel)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_database/modules/messages/isPrivateChannel.tsx");

export const isPrivateChannel = function isPrivateChannel(basicChannel) {
  return null == basicChannel.guild_id;
};
