// Module ID: 8157
// Function ID: 8158
// Name: isPrivateChannel
// Dependencies: [2]
// Exports: isPrivateChannel

// Module 8157 (isPrivateChannel)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_database/modules/messages/isPrivateChannel.tsx");

export function isPrivateChannel(basicChannel) {
  return null == basicChannel.guild_id;
}
