// Module ID: 5648
// Function ID: 5649
// Name: isAccessibleNonStaticChannelPath
// Dependencies: [4913, 5649, 2]
// Exports: default

// Module 5648 (isAccessibleNonStaticChannelPath)
import LinkUtils from "LinkUtils" /* 5649 */;
import GatedChannelStore from "GatedChannelStore" /* 4913 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/links/isAccessibleNonStaticChannelPath.tsx");

export default function isAccessibleNonStaticChannelPath(guild_id) {
  const obj = LinkUtils;
  const canViewChannelResult = obj.canViewChannel(guild_id) || GatedChannelStore.isChannelGatedAndVisible(guild_id.guild_id, guild_id.id);
  return canViewChannelResult;
};
