// Module ID: 7643
// Function ID: 7644
// Name: isAccessibleNonStaticChannelPath
// Dependencies: [2097, 4981, 2]
// Exports: default

// Module 7643 (isAccessibleNonStaticChannelPath)
import LinkUtils from "LinkUtils" /* 4981 */;
import GatedChannelStore from "GatedChannelStore" /* 2097 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/links/isAccessibleNonStaticChannelPath.tsx");

export default function isAccessibleNonStaticChannelPath(guild_id) {
  let canViewChannelResult = LinkUtils.canViewChannel(guild_id);
  if (!canViewChannelResult) {
    canViewChannelResult = GatedChannelStore.isChannelGatedAndVisible(guild_id.guild_id, guild_id.id);
  }
  return canViewChannelResult;
};
