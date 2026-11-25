// Module ID: 5634
// Function ID: 5635
// Name: isAccessibleNonStaticChannelPath
// Dependencies: [4916, 5635, 2]
// Exports: default

// Module 5634 (isAccessibleNonStaticChannelPath)
import LinkUtils from "LinkUtils" /* 5635 */;
import GatedChannelStore from "GatedChannelStore" /* 4916 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/links/isAccessibleNonStaticChannelPath.tsx");

export default function isAccessibleNonStaticChannelPath(guild_id) {
  const obj = LinkUtils;
  const canViewChannelResult = obj.canViewChannel(guild_id) || GatedChannelStore.isChannelGatedAndVisible(guild_id.guild_id, guild_id.id);
  return canViewChannelResult;
};
