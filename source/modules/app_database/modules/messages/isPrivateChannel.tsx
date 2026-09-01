// Module ID: 7228
// Function ID: 7229
// Name: isPrivateChannel
// Dependencies: [2]
// Exports: isPrivateChannel

// Module 7228 (isPrivateChannel)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/app_database/modules/messages/isPrivateChannel.tsx");

export const isPrivateChannel = function isPrivateChannel(basicChannel) {
  return null == basicChannel.guild_id;
};
