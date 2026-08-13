// Module ID: 12619
// Function ID: 12620
// Name: useIsForumChannelSearchActive
// Dependencies: [7272, 12606, 589, 2]
// Exports: useIsForumChannelSearchActive

// Module 12619 (useIsForumChannelSearchActive)
import initialize from "initialize";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/forums/native/hooks/useIsForumChannelSearchActive.tsx");

export const useIsForumChannelSearchActive = function useIsForumChannelSearchActive(channelId) {
  const _require = channelId;
  let canSearchForumPostsByChannelId = _require(12606).useCanSearchForumPostsByChannelId(channelId);
  _require(589);
  [][0] = channelId;
  if (canSearchForumPostsByChannelId) {
    canSearchForumPostsByChannelId = null != tmp3;
  }
  return canSearchForumPostsByChannelId;
};
