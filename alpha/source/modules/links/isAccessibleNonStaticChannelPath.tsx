// Module ID: 5445
// Function ID: 5446
// Name: isAccessibleNonStaticChannelPath
// Dependencies: [4727, 5446, 2]
// Exports: default

// Module 5445 (isAccessibleNonStaticChannelPath)
import LinkUtils from "LinkUtils" /* 5446 */;
import GatedChannelStore from "GatedChannelStore" /* 4727 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/links/isAccessibleNonStaticChannelPath.tsx");

export default function isAccessibleNonStaticChannelPath(guild_id) {
  const obj = LinkUtils;
  const canViewChannelResult = obj.canViewChannel(guild_id) || GatedChannelStore.isChannelGatedAndVisible(guild_id.guild_id, guild_id.id);
  return canViewChannelResult;
};
