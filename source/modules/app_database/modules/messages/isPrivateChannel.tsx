// Module ID: 5079
// Function ID: 5080
// Name: isPrivateChannel
// Dependencies: [2]
// Exports: isPrivateChannel

// Module 5079 (isPrivateChannel)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/app_database/modules/messages/isPrivateChannel.tsx");

export const isPrivateChannel = function isPrivateChannel(basicChannel) {
  return null == basicChannel.guild_id;
};
