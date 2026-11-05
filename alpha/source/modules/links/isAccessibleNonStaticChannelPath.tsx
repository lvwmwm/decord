// Module ID: 5789
// Function ID: 5790
// Name: isAccessibleNonStaticChannelPath
// Dependencies: [5047, 5790, 2]
// Exports: default

// Module 5789 (isAccessibleNonStaticChannelPath)
import LinkUtils from "LinkUtils" /* 5790 */;
import GatedChannelStore from "GatedChannelStore" /* 5047 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/links/isAccessibleNonStaticChannelPath.tsx");

export default function isAccessibleNonStaticChannelPath(guild_id) {
  const obj = LinkUtils;
  const canViewChannelResult = obj.canViewChannel(guild_id) || GatedChannelStore.isChannelGatedAndVisible(guild_id.guild_id, guild_id.id);
  return canViewChannelResult;
};
