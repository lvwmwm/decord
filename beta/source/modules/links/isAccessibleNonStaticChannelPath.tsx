// Module ID: 6734
// Function ID: 6735
// Name: isAccessibleNonStaticChannelPath
// Dependencies: [2103, 4991, 2]
// Exports: default

// Module 6734 (isAccessibleNonStaticChannelPath)
import LinkUtils from "LinkUtils" /* 4991 */;
import GatedChannelStore from "GatedChannelStore" /* 2103 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/links/isAccessibleNonStaticChannelPath.tsx");

export default function isAccessibleNonStaticChannelPath(guild_id) {
  const obj = LinkUtils;
  const canViewChannelResult = obj.canViewChannel(guild_id) || GatedChannelStore.isChannelGatedAndVisible(guild_id.guild_id, guild_id.id);
  return canViewChannelResult;
};
