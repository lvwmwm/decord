// Module ID: 7650
// Function ID: 7651
// Name: isPrivateChannel
// Dependencies: [2]
// Exports: isPrivateChannel

// Module 7650 (isPrivateChannel)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_database/modules/messages/isPrivateChannel.tsx");

export function isPrivateChannel(basicChannel) {
  return null == basicChannel.guild_id;
}
