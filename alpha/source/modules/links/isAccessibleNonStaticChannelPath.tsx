// Module ID: 7559
// Function ID: 7560
// Name: isAccessibleNonStaticChannelPath
// Dependencies: [2097, 4911, 2]
// Exports: default

// Module 7559 (isAccessibleNonStaticChannelPath)
import LinkUtils from "LinkUtils" /* 4911 */;
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
