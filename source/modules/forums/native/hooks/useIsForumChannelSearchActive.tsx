// Module ID: 10155
// Function ID: 78528
// Name: useIsForumChannelSearchActive
// Dependencies: [7009, 10134, 566, 2]
// Exports: useIsForumChannelSearchActive

// Module 10155 (useIsForumChannelSearchActive)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/forums/native/hooks/useIsForumChannelSearchActive.tsx");

export const useIsForumChannelSearchActive = function useIsForumChannelSearchActive(channelId) {
  const _require = channelId;
  let canSearchForumPostsByChannelId = _require(10134).useCanSearchForumPostsByChannelId(channelId);
  _require(566);
  [][0] = channelId;
  if (canSearchForumPostsByChannelId) {
    canSearchForumPostsByChannelId = null != tmp3;
  }
  return canSearchForumPostsByChannelId;
};
