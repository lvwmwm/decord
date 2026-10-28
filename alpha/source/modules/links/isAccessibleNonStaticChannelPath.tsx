// Module ID: 5641
// Function ID: 5642
// Name: isAccessibleNonStaticChannelPath
// Dependencies: [4908, 5642, 2]
// Exports: default

// Module 5641 (isAccessibleNonStaticChannelPath)
import LinkUtils from "LinkUtils" /* 5642 */;
import GatedChannelStore from "GatedChannelStore" /* 4908 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/links/isAccessibleNonStaticChannelPath.tsx");

export default function isAccessibleNonStaticChannelPath(guild_id) {
  const obj = LinkUtils;
  const canViewChannelResult = obj.canViewChannel(guild_id) || GatedChannelStore.isChannelGatedAndVisible(guild_id.guild_id, guild_id.id);
  return canViewChannelResult;
};
