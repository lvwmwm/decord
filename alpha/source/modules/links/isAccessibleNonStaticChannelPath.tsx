// Module ID: 7255
// Function ID: 7256
// Name: isAccessibleNonStaticChannelPath
// Dependencies: [2120, 5485, 2]
// Exports: default

// Module 7255 (isAccessibleNonStaticChannelPath)
import LinkUtils from "LinkUtils" /* 5485 */;
import GatedChannelStore from "GatedChannelStore" /* 2120 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/links/isAccessibleNonStaticChannelPath.tsx");

export default function isAccessibleNonStaticChannelPath(guild_id) {
  const obj = LinkUtils;
  const canViewChannelResult = obj.canViewChannel(guild_id) || GatedChannelStore.isChannelGatedAndVisible(guild_id.guild_id, guild_id.id);
  return canViewChannelResult;
};
