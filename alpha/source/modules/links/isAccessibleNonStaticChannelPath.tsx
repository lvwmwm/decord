// Module ID: 5566
// Function ID: 5567
// Name: isAccessibleNonStaticChannelPath
// Dependencies: [4852, 5567, 2]
// Exports: default

// Module 5566 (isAccessibleNonStaticChannelPath)
import LinkUtils from "LinkUtils" /* 5567 */;
import GatedChannelStore from "GatedChannelStore" /* 4852 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/links/isAccessibleNonStaticChannelPath.tsx");

export default function isAccessibleNonStaticChannelPath(guild_id) {
  const obj = LinkUtils;
  const canViewChannelResult = obj.canViewChannel(guild_id) || GatedChannelStore.isChannelGatedAndVisible(guild_id.guild_id, guild_id.id);
  return canViewChannelResult;
};
