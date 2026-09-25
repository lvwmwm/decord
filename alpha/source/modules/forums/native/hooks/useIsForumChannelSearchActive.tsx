// Module ID: 12836
// Function ID: 12837
// Name: useIsForumChannelSearchActive
// Dependencies: [7182, 12819, 504, 2]
// Exports: useIsForumChannelSearchActive

// Module 12836 (useIsForumChannelSearchActive)
import ForumSearchStore from "ForumSearchStore" /* 7182 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/hooks/useIsForumChannelSearchActive.tsx");

export const useIsForumChannelSearchActive = function useIsForumChannelSearchActive(channelId) {
  _require = channelId;
  let canSearchForumPostsByChannelId = require("useCanSearchForumPostsByChannelId").useCanSearchForumPostsByChannelId(channelId);
  require("initialize");
  [][0] = channelId;
  if (canSearchForumPostsByChannelId) {
    canSearchForumPostsByChannelId = null != tmp3;
  }
  return canSearchForumPostsByChannelId;
};
