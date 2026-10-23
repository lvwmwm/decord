// Module ID: 5603
// Function ID: 5604
// Name: isAccessibleNonStaticChannelPath
// Dependencies: [4873, 5604, 2]
// Exports: default

// Module 5603 (isAccessibleNonStaticChannelPath)
import LinkUtils from "LinkUtils" /* 5604 */;
import GatedChannelStore from "GatedChannelStore" /* 4873 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/links/isAccessibleNonStaticChannelPath.tsx");

export default function isAccessibleNonStaticChannelPath(guild_id) {
  const obj = LinkUtils;
  const canViewChannelResult = obj.canViewChannel(guild_id) || GatedChannelStore.isChannelGatedAndVisible(guild_id.guild_id, guild_id.id);
  return canViewChannelResult;
};
