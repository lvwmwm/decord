// Module ID: 5809
// Function ID: 5810
// Name: isAccessibleNonStaticChannelPath
// Dependencies: [5074, 5810, 2]
// Exports: default

// Module 5809 (isAccessibleNonStaticChannelPath)
import LinkUtils from "LinkUtils" /* 5810 */;
import GatedChannelStore from "GatedChannelStore" /* 5074 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/links/isAccessibleNonStaticChannelPath.tsx");

export default function isAccessibleNonStaticChannelPath(guild_id) {
  const obj = LinkUtils;
  const canViewChannelResult = obj.canViewChannel(guild_id) || GatedChannelStore.isChannelGatedAndVisible(guild_id.guild_id, guild_id.id);
  return canViewChannelResult;
};
