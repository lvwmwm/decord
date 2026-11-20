// Module ID: 5416
// Function ID: 5417
// Name: isAccessibleNonStaticChannelPath
// Dependencies: [4698, 5417, 2]
// Exports: default

// Module 5416 (isAccessibleNonStaticChannelPath)
import LinkUtils from "LinkUtils" /* 5417 */;
import GatedChannelStore from "GatedChannelStore" /* 4698 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/links/isAccessibleNonStaticChannelPath.tsx");

export default function isAccessibleNonStaticChannelPath(guild_id) {
  const obj = LinkUtils;
  const canViewChannelResult = obj.canViewChannel(guild_id) || GatedChannelStore.isChannelGatedAndVisible(guild_id.guild_id, guild_id.id);
  return canViewChannelResult;
};
