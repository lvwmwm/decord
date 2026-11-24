// Module ID: 5535
// Function ID: 5536
// Name: isAccessibleNonStaticChannelPath
// Dependencies: [4817, 5536, 2]
// Exports: default

// Module 5535 (isAccessibleNonStaticChannelPath)
import LinkUtils from "LinkUtils" /* 5536 */;
import GatedChannelStore from "GatedChannelStore" /* 4817 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/links/isAccessibleNonStaticChannelPath.tsx");

export default function isAccessibleNonStaticChannelPath(guild_id) {
  const obj = LinkUtils;
  const canViewChannelResult = obj.canViewChannel(guild_id) || GatedChannelStore.isChannelGatedAndVisible(guild_id.guild_id, guild_id.id);
  return canViewChannelResult;
};
