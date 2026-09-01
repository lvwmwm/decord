// Module ID: 12937
// Function ID: 12938
// Name: useIsForumChannelSearchActive
// Dependencies: [7512, 12924, 589, 2]
// Exports: useIsForumChannelSearchActive

// Module 12937 (useIsForumChannelSearchActive)
import closure_2 from "initialize" /* 7512 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/forums/native/hooks/useIsForumChannelSearchActive.tsx");

export const useIsForumChannelSearchActive = function useIsForumChannelSearchActive(channelId) {
  const _require = channelId;
  let canSearchForumPostsByChannelId = _require(12924).useCanSearchForumPostsByChannelId(channelId);
  _require(589);
  [][0] = channelId;
  if (canSearchForumPostsByChannelId) {
    canSearchForumPostsByChannelId = null != tmp3;
  }
  return canSearchForumPostsByChannelId;
};
