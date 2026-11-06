// Module ID: 5807
// Function ID: 5808
// Name: isAccessibleNonStaticChannelPath
// Dependencies: [5074, 5808, 2]
// Exports: default

// Module 5807 (isAccessibleNonStaticChannelPath)
import LinkUtils from "LinkUtils" /* 5808 */;
import GatedChannelStore from "GatedChannelStore" /* 5074 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/links/isAccessibleNonStaticChannelPath.tsx");

export default function isAccessibleNonStaticChannelPath(guild_id) {
  const obj = LinkUtils;
  const canViewChannelResult = obj.canViewChannel(guild_id) || GatedChannelStore.isChannelGatedAndVisible(guild_id.guild_id, guild_id.id);
  return canViewChannelResult;
};
