// Module ID: 7237
// Function ID: 7238
// Name: isPrivateChannel
// Dependencies: [2]
// Exports: isPrivateChannel

// Module 7237 (isPrivateChannel)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/app_database/modules/messages/isPrivateChannel.tsx");

export const isPrivateChannel = function isPrivateChannel(basicChannel) {
  return null == basicChannel.guild_id;
};
