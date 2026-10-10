// Module ID: 7031
// Function ID: 7032
// Name: isAccessibleNonStaticChannelPath
// Dependencies: [2117, 5422, 2]
// Exports: default

// Module 7031 (isAccessibleNonStaticChannelPath)
import LinkUtils from "LinkUtils" /* 5422 */;
import GatedChannelStore from "GatedChannelStore" /* 2117 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/links/isAccessibleNonStaticChannelPath.tsx");

export default function isAccessibleNonStaticChannelPath(guild_id) {
  const obj = LinkUtils;
  const canViewChannelResult = obj.canViewChannel(guild_id) || GatedChannelStore.isChannelGatedAndVisible(guild_id.guild_id, guild_id.id);
  return canViewChannelResult;
};
