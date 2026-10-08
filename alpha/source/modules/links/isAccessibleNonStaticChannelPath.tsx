// Module ID: 7022
// Function ID: 7023
// Name: isAccessibleNonStaticChannelPath
// Dependencies: [2116, 5418, 2]
// Exports: default

// Module 7022 (isAccessibleNonStaticChannelPath)
import LinkUtils from "LinkUtils" /* 5418 */;
import GatedChannelStore from "GatedChannelStore" /* 2116 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/links/isAccessibleNonStaticChannelPath.tsx");

export default function isAccessibleNonStaticChannelPath(guild_id) {
  const obj = LinkUtils;
  const canViewChannelResult = obj.canViewChannel(guild_id) || GatedChannelStore.isChannelGatedAndVisible(guild_id.guild_id, guild_id.id);
  return canViewChannelResult;
};
