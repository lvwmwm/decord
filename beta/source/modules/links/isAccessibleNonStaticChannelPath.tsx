// Module ID: 6733
// Function ID: 6734
// Name: isAccessibleNonStaticChannelPath
// Dependencies: [2100, 4990, 2]
// Exports: default

// Module 6733 (isAccessibleNonStaticChannelPath)
import LinkUtils from "LinkUtils" /* 4990 */;
import GatedChannelStore from "GatedChannelStore" /* 2100 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/links/isAccessibleNonStaticChannelPath.tsx");

export default function isAccessibleNonStaticChannelPath(guild_id) {
  const obj = LinkUtils;
  const canViewChannelResult = obj.canViewChannel(guild_id) || GatedChannelStore.isChannelGatedAndVisible(guild_id.guild_id, guild_id.id);
  return canViewChannelResult;
};
