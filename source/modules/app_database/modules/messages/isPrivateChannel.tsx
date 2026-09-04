// Module ID: 7416
// Function ID: 7417
// Name: isPrivateChannel
// Dependencies: [2]
// Exports: isPrivateChannel

// Module 7416 (isPrivateChannel)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/app_database/modules/messages/isPrivateChannel.tsx");

export const isPrivateChannel = function isPrivateChannel(basicChannel) {
  return null == basicChannel.guild_id;
};
