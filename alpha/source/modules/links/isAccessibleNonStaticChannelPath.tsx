// Module ID: 6728
// Function ID: 6729
// Name: isAccessibleNonStaticChannelPath
// Dependencies: [2099, 4983, 2]
// Exports: default

// Module 6728 (isAccessibleNonStaticChannelPath)
import LinkUtils from "LinkUtils" /* 4983 */;
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
