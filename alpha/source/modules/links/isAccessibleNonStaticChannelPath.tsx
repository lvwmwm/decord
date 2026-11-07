// Module ID: 5777
// Function ID: 5778
// Name: isAccessibleNonStaticChannelPath
// Dependencies: [5044, 5778, 2]
// Exports: default

// Module 5777 (isAccessibleNonStaticChannelPath)
import LinkUtils from "LinkUtils" /* 5778 */;
import GatedChannelStore from "GatedChannelStore" /* 5044 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/links/isAccessibleNonStaticChannelPath.tsx");

export default function isAccessibleNonStaticChannelPath(guild_id) {
  const obj = LinkUtils;
  const canViewChannelResult = obj.canViewChannel(guild_id) || GatedChannelStore.isChannelGatedAndVisible(guild_id.guild_id, guild_id.id);
  return canViewChannelResult;
};
