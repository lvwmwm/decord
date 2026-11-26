// Module ID: 5665
// Function ID: 5666
// Name: isAccessibleNonStaticChannelPath
// Dependencies: [4947, 5666, 2]
// Exports: default

// Module 5665 (isAccessibleNonStaticChannelPath)
import LinkUtils from "LinkUtils" /* 5666 */;
import GatedChannelStore from "GatedChannelStore" /* 4947 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/links/isAccessibleNonStaticChannelPath.tsx");

export default function isAccessibleNonStaticChannelPath(guild_id) {
  const obj = LinkUtils;
  const canViewChannelResult = obj.canViewChannel(guild_id) || GatedChannelStore.isChannelGatedAndVisible(guild_id.guild_id, guild_id.id);
  return canViewChannelResult;
};
