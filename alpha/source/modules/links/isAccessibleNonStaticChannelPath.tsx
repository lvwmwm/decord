// Module ID: 5955
// Function ID: 5956
// Name: isAccessibleNonStaticChannelPath
// Dependencies: [5210, 5956, 2]
// Exports: default

// Module 5955 (isAccessibleNonStaticChannelPath)
import LinkUtils from "LinkUtils" /* 5956 */;
import GatedChannelStore from "GatedChannelStore" /* 5210 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/links/isAccessibleNonStaticChannelPath.tsx");

export default function isAccessibleNonStaticChannelPath(guild_id) {
  const obj = LinkUtils;
  const canViewChannelResult = obj.canViewChannel(guild_id) || GatedChannelStore.isChannelGatedAndVisible(guild_id.guild_id, guild_id.id);
  return canViewChannelResult;
};
