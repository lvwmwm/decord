// Module ID: 5414
// Function ID: 5415
// Name: isAccessibleNonStaticChannelPath
// Dependencies: [4696, 5415, 2]
// Exports: default

// Module 5414 (isAccessibleNonStaticChannelPath)
import LinkUtils from "LinkUtils" /* 5415 */;
import GatedChannelStore from "GatedChannelStore" /* 4696 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/links/isAccessibleNonStaticChannelPath.tsx");

export default function isAccessibleNonStaticChannelPath(guild_id) {
  const obj = LinkUtils;
  const canViewChannelResult = obj.canViewChannel(guild_id) || GatedChannelStore.isChannelGatedAndVisible(guild_id.guild_id, guild_id.id);
  return canViewChannelResult;
};
