// Module ID: 5773
// Function ID: 5774
// Name: isAccessibleNonStaticChannelPath
// Dependencies: [5045, 5774, 2]
// Exports: default

// Module 5773 (isAccessibleNonStaticChannelPath)
import LinkUtils from "LinkUtils" /* 5774 */;
import GatedChannelStore from "GatedChannelStore" /* 5045 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/links/isAccessibleNonStaticChannelPath.tsx");

export default function isAccessibleNonStaticChannelPath(guild_id) {
  const obj = LinkUtils;
  const canViewChannelResult = obj.canViewChannel(guild_id) || GatedChannelStore.isChannelGatedAndVisible(guild_id.guild_id, guild_id.id);
  return canViewChannelResult;
};
