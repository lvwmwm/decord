// Module ID: 17659
// Function ID: 17660
// Name: showChannelBadge
// Dependencies: [2]
// Exports: default

// Module 17659 (showChannelBadge)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_sidebar/showChannelBadge.tsx");

export default function showChannelBadge(isNewChannel) {
  let mentionsCount;
  let muted;
  let postsWithUnreadsCount;
  ({ mentionsCount, postsWithUnreadsCount, muted } = isNewChannel);
  let tmp = null != mentionsCount;
  isNewChannel = isNewChannel.isNewChannel;
  if (tmp) {
    tmp = mentionsCount > 0;
  }
  if (!tmp) {
    tmp = isNewChannel;
  }
  if (!tmp) {
    tmp = null != muted && !muted && null != postsWithUnreadsCount && postsWithUnreadsCount > 0;
    const tmp2 = null != muted && !muted && null != postsWithUnreadsCount && postsWithUnreadsCount > 0;
  }
  return tmp;
};
