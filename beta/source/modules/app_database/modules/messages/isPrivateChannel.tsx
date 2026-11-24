// Module ID: 8276
// Function ID: 8277
// Name: isPrivateChannel
// Dependencies: [2]
// Exports: isPrivateChannel

// Module 8276 (isPrivateChannel)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_database/modules/messages/isPrivateChannel.tsx");

export function isPrivateChannel(basicChannel) {
  return null == basicChannel.guild_id;
}
