// Module ID: 13204
// Function ID: 13205
// Name: useIsForumChannelSearchActive
// Dependencies: [7700, 13190, 586, 2]
// Exports: useIsForumChannelSearchActive

// Module 13204 (useIsForumChannelSearchActive)
import closure_2 from "initialize" /* 7700 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/forums/native/hooks/useIsForumChannelSearchActive.tsx");

export const useIsForumChannelSearchActive = function useIsForumChannelSearchActive(channelId) {
  const _require = channelId;
  let canSearchForumPostsByChannelId = _require(13190).useCanSearchForumPostsByChannelId(channelId);
  _require(586);
  [][0] = channelId;
  if (canSearchForumPostsByChannelId) {
    canSearchForumPostsByChannelId = null != tmp3;
  }
  return canSearchForumPostsByChannelId;
};
