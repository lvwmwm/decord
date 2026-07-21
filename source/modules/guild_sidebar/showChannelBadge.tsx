// Module ID: 14924
// Function ID: 112363
// Name: showChannelBadge
// Dependencies: [284214097]
// Exports: default

// Module 14924 (showChannelBadge)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/guild_sidebar/showChannelBadge.tsx");

export default function showChannelBadge(isNewChannel) {
  let mentionsCount;
  let muted;
  let postsWithUnreadsCount;
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
