// Module ID: 8686
// Function ID: 8687
// Name: isPrivateChannel
// Dependencies: [2]
// Exports: isPrivateChannel

// Module 8686 (isPrivateChannel)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_database/modules/messages/isPrivateChannel.tsx");

export function isPrivateChannel(basicChannel) {
  return null == basicChannel.guild_id;
}
