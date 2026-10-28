// Module ID: 5637
// Function ID: 5638
// Name: isAccessibleNonStaticChannelPath
// Dependencies: [4907, 5638, 2]
// Exports: default

// Module 5637 (isAccessibleNonStaticChannelPath)
import LinkUtils from "LinkUtils" /* 5638 */;
import GatedChannelStore from "GatedChannelStore" /* 4907 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/links/isAccessibleNonStaticChannelPath.tsx");

export default function isAccessibleNonStaticChannelPath(guild_id) {
  const obj = LinkUtils;
  const canViewChannelResult = obj.canViewChannel(guild_id) || GatedChannelStore.isChannelGatedAndVisible(guild_id.guild_id, guild_id.id);
  return canViewChannelResult;
};
