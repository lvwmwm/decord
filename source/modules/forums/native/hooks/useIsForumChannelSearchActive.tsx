// Module ID: 12618
// Function ID: 12619
// Name: useIsForumChannelSearchActive
// Dependencies: [7267, 12605, 589, 2]
// Exports: useIsForumChannelSearchActive

// Module 12618 (useIsForumChannelSearchActive)
import initialize from "initialize";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/forums/native/hooks/useIsForumChannelSearchActive.tsx");

export const useIsForumChannelSearchActive = function useIsForumChannelSearchActive(channelId) {
  const _require = channelId;
  let canSearchForumPostsByChannelId = _require(12605).useCanSearchForumPostsByChannelId(channelId);
  _require(589);
  [][0] = channelId;
  if (canSearchForumPostsByChannelId) {
    canSearchForumPostsByChannelId = null != tmp3;
  }
  return canSearchForumPostsByChannelId;
};
