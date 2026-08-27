// Module ID: 7161
// Function ID: 7162
// Name: isPrivateChannel
// Dependencies: [2]
// Exports: isPrivateChannel

// Module 7161 (isPrivateChannel)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/app_database/modules/messages/isPrivateChannel.tsx");

export const isPrivateChannel = function isPrivateChannel(basicChannel) {
  return null == basicChannel.guild_id;
};
