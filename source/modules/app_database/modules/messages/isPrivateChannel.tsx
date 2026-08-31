// Module ID: 7196
// Function ID: 7197
// Name: isPrivateChannel
// Dependencies: [2]
// Exports: isPrivateChannel

// Module 7196 (isPrivateChannel)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/app_database/modules/messages/isPrivateChannel.tsx");

export const isPrivateChannel = function isPrivateChannel(basicChannel) {
  return null == basicChannel.guild_id;
};
