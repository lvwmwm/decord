// Module ID: 6828
// Function ID: 6829
// Name: isAccessibleNonStaticChannelPath
// Dependencies: [2104, 5050, 2]
// Exports: default

// Module 6828 (isAccessibleNonStaticChannelPath)
import LinkUtils from "LinkUtils" /* 5050 */;
import GatedChannelStore from "GatedChannelStore" /* 2104 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/links/isAccessibleNonStaticChannelPath.tsx");

export default function isAccessibleNonStaticChannelPath(guild_id) {
  const obj = LinkUtils;
  const canViewChannelResult = obj.canViewChannel(guild_id) || GatedChannelStore.isChannelGatedAndVisible(guild_id.guild_id, guild_id.id);
  return canViewChannelResult;
};
