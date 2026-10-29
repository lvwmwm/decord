// Module ID: 5642
// Function ID: 5643
// Name: isAccessibleNonStaticChannelPath
// Dependencies: [4909, 5643, 2]
// Exports: default

// Module 5642 (isAccessibleNonStaticChannelPath)
import LinkUtils from "LinkUtils" /* 5643 */;
import GatedChannelStore from "GatedChannelStore" /* 4909 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/links/isAccessibleNonStaticChannelPath.tsx");

export default function isAccessibleNonStaticChannelPath(guild_id) {
  const obj = LinkUtils;
  const canViewChannelResult = obj.canViewChannel(guild_id) || GatedChannelStore.isChannelGatedAndVisible(guild_id.guild_id, guild_id.id);
  return canViewChannelResult;
};
