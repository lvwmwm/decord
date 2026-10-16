// Module ID: 7253
// Function ID: 7254
// Name: isAccessibleNonStaticChannelPath
// Dependencies: [2120, 5484, 2]
// Exports: default

// Module 7253 (isAccessibleNonStaticChannelPath)
import LinkUtils from "LinkUtils" /* 5484 */;
import GatedChannelStore from "GatedChannelStore" /* 2120 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/links/isAccessibleNonStaticChannelPath.tsx");

export default function isAccessibleNonStaticChannelPath(guild_id) {
  const obj = LinkUtils;
  const canViewChannelResult = obj.canViewChannel(guild_id) || GatedChannelStore.isChannelGatedAndVisible(guild_id.guild_id, guild_id.id);
  return canViewChannelResult;
};
