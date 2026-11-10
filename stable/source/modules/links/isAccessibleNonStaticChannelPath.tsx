// Module ID: 5653
// Function ID: 5654
// Name: isAccessibleNonStaticChannelPath
// Dependencies: [4918, 5654, 2]
// Exports: default

// Module 5653 (isAccessibleNonStaticChannelPath)
import LinkUtils from "LinkUtils" /* 5654 */;
import GatedChannelStore from "GatedChannelStore" /* 4918 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/links/isAccessibleNonStaticChannelPath.tsx");

export default function isAccessibleNonStaticChannelPath(guild_id) {
  const obj = LinkUtils;
  const canViewChannelResult = obj.canViewChannel(guild_id) || GatedChannelStore.isChannelGatedAndVisible(guild_id.guild_id, guild_id.id);
  return canViewChannelResult;
};
