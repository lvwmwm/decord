// Module ID: 5587
// Function ID: 5588
// Name: isAccessibleNonStaticChannelPath
// Dependencies: [4873, 5588, 2]
// Exports: default

// Module 5587 (isAccessibleNonStaticChannelPath)
import LinkUtils from "LinkUtils" /* 5588 */;
import GatedChannelStore from "GatedChannelStore" /* 4873 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/links/isAccessibleNonStaticChannelPath.tsx");

export default function isAccessibleNonStaticChannelPath(guild_id) {
  const obj = LinkUtils;
  const canViewChannelResult = obj.canViewChannel(guild_id) || GatedChannelStore.isChannelGatedAndVisible(guild_id.guild_id, guild_id.id);
  return canViewChannelResult;
};
