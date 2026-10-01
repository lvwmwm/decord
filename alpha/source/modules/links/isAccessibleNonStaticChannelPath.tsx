// Module ID: 6920
// Function ID: 6921
// Name: isAccessibleNonStaticChannelPath
// Dependencies: [2099, 4999, 2]
// Exports: default

// Module 6920 (isAccessibleNonStaticChannelPath)
import LinkUtils from "LinkUtils" /* 4999 */;
import GatedChannelStore from "GatedChannelStore" /* 2099 */;

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
