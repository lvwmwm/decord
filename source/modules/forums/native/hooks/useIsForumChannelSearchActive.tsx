// Module ID: 12832
// Function ID: 12833
// Name: useIsForumChannelSearchActive
// Dependencies: [7437, 12819, 589, 2]
// Exports: useIsForumChannelSearchActive

// Module 12832 (useIsForumChannelSearchActive)
import closure_2 from "initialize" /* 7437 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/forums/native/hooks/useIsForumChannelSearchActive.tsx");

export const useIsForumChannelSearchActive = function useIsForumChannelSearchActive(channelId) {
  const _require = channelId;
  let canSearchForumPostsByChannelId = _require(12819).useCanSearchForumPostsByChannelId(channelId);
  _require(589);
  [][0] = channelId;
  if (canSearchForumPostsByChannelId) {
    canSearchForumPostsByChannelId = null != tmp3;
  }
  return canSearchForumPostsByChannelId;
};
