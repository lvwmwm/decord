// Module ID: 5591
// Function ID: 5592
// Name: isAccessibleNonStaticChannelPath
// Dependencies: [4873, 5592, 2]
// Exports: default

// Module 5591 (isAccessibleNonStaticChannelPath)
import LinkUtils from "LinkUtils" /* 5592 */;
import GatedChannelStore from "GatedChannelStore" /* 4873 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/links/isAccessibleNonStaticChannelPath.tsx");

export default function isAccessibleNonStaticChannelPath(guild_id) {
  const obj = LinkUtils;
  const canViewChannelResult = obj.canViewChannel(guild_id) || GatedChannelStore.isChannelGatedAndVisible(guild_id.guild_id, guild_id.id);
  return canViewChannelResult;
};
