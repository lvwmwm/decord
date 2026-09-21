// Module ID: 16567
// Function ID: 16568
// Name: showChannelBadge
// Dependencies: [2]
// Exports: default

// Module 16567 (showChannelBadge)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_sidebar/showChannelBadge.tsx");

export default function showChannelBadge(isNewChannel) {
  ({ mentionsCount, postsWithUnreadsCount, muted } = isNewChannel);
  isNewChannel = null != mentionsCount;
  if (isNewChannel) {
    isNewChannel = mentionsCount > 0;
  }
  if (!isNewChannel) {
    isNewChannel = isNewChannel.isNewChannel;
  }
  if (!isNewChannel) {
    let tmp = null != muted && !muted && null != postsWithUnreadsCount;
    if (tmp) {
      tmp = postsWithUnreadsCount > 0;
    }
    isNewChannel = tmp;
  }
  return isNewChannel;
};
