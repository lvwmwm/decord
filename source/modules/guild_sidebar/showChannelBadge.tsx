// Module ID: 15098
// Function ID: 114929
// Name: showChannelBadge
// Dependencies: [2]
// Exports: default

// Module 15098 (showChannelBadge)
const result = require("set").fileFinishedImporting("modules/guild_sidebar/showChannelBadge.tsx");

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
