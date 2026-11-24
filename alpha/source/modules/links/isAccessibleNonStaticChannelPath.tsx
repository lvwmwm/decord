// Module ID: 5539
// Function ID: 5540
// Name: isAccessibleNonStaticChannelPath
// Dependencies: [4821, 5540, 2]
// Exports: default

// Module 5539 (isAccessibleNonStaticChannelPath)
import LinkUtils from "LinkUtils" /* 5540 */;
import GatedChannelStore from "GatedChannelStore" /* 4821 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/links/isAccessibleNonStaticChannelPath.tsx");

export default function isAccessibleNonStaticChannelPath(guild_id) {
  const obj = LinkUtils;
  const canViewChannelResult = obj.canViewChannel(guild_id) || GatedChannelStore.isChannelGatedAndVisible(guild_id.guild_id, guild_id.id);
  return canViewChannelResult;
};
