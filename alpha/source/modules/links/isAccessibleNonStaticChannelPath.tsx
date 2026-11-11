// Module ID: 5892
// Function ID: 5893
// Name: isAccessibleNonStaticChannelPath
// Dependencies: [5147, 5893, 2]
// Exports: default

// Module 5892 (isAccessibleNonStaticChannelPath)
import LinkUtils from "LinkUtils" /* 5893 */;
import GatedChannelStore from "GatedChannelStore" /* 5147 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/links/isAccessibleNonStaticChannelPath.tsx");

export default function isAccessibleNonStaticChannelPath(guild_id) {
  const obj = LinkUtils;
  const canViewChannelResult = obj.canViewChannel(guild_id) || GatedChannelStore.isChannelGatedAndVisible(guild_id.guild_id, guild_id.id);
  return canViewChannelResult;
};
