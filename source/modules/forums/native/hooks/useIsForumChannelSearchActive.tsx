// Module ID: 10127
// Function ID: 78288
// Name: useIsForumChannelSearchActive
// Dependencies: [6061, 10106, 566, 2]
// Exports: useIsForumChannelSearchActive

// Module 10127 (useIsForumChannelSearchActive)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/forums/native/hooks/useIsForumChannelSearchActive.tsx");

export const useIsForumChannelSearchActive = function useIsForumChannelSearchActive(channelId) {
  const _require = channelId;
  let canSearchForumPostsByChannelId = _require(10106).useCanSearchForumPostsByChannelId(channelId);
  _require(566);
  [][0] = channelId;
  if (canSearchForumPostsByChannelId) {
    canSearchForumPostsByChannelId = null != tmp3;
  }
  return canSearchForumPostsByChannelId;
};
