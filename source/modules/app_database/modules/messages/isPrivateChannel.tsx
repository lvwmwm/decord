// Module ID: 7155
// Function ID: 7156
// Name: isPrivateChannel
// Dependencies: [2]
// Exports: isPrivateChannel

// Module 7155 (isPrivateChannel)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/app_database/modules/messages/isPrivateChannel.tsx");

export const isPrivateChannel = function isPrivateChannel(basicChannel) {
  return null == basicChannel.guild_id;
};
