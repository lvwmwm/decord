// Module ID: 5949
// Function ID: 5950
// Name: isAccessibleNonStaticChannelPath
// Dependencies: [5214, 5950, 2]
// Exports: default

// Module 5949 (isAccessibleNonStaticChannelPath)
import LinkUtils from "LinkUtils" /* 5950 */;
import GatedChannelStore from "GatedChannelStore" /* 5214 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/links/isAccessibleNonStaticChannelPath.tsx");

export default function isAccessibleNonStaticChannelPath(guild_id) {
  const obj = LinkUtils;
  const canViewChannelResult = obj.canViewChannel(guild_id) || GatedChannelStore.isChannelGatedAndVisible(guild_id.guild_id, guild_id.id);
  return canViewChannelResult;
};
