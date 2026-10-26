// Module ID: 5605
// Function ID: 5606
// Name: isAccessibleNonStaticChannelPath
// Dependencies: [4875, 5606, 2]
// Exports: default

// Module 5605 (isAccessibleNonStaticChannelPath)
import LinkUtils from "LinkUtils" /* 5606 */;
import GatedChannelStore from "GatedChannelStore" /* 4875 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/links/isAccessibleNonStaticChannelPath.tsx");

export default function isAccessibleNonStaticChannelPath(guild_id) {
  const obj = LinkUtils;
  const canViewChannelResult = obj.canViewChannel(guild_id) || GatedChannelStore.isChannelGatedAndVisible(guild_id.guild_id, guild_id.id);
  return canViewChannelResult;
};
