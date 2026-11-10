// Module ID: 5779
// Function ID: 5780
// Name: isAccessibleNonStaticChannelPath
// Dependencies: [5046, 5780, 2]
// Exports: default

// Module 5779 (isAccessibleNonStaticChannelPath)
import LinkUtils from "LinkUtils" /* 5780 */;
import GatedChannelStore from "GatedChannelStore" /* 5046 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/links/isAccessibleNonStaticChannelPath.tsx");

export default function isAccessibleNonStaticChannelPath(guild_id) {
  const obj = LinkUtils;
  const canViewChannelResult = obj.canViewChannel(guild_id) || GatedChannelStore.isChannelGatedAndVisible(guild_id.guild_id, guild_id.id);
  return canViewChannelResult;
};
