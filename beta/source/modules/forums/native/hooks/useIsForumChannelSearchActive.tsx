// Module ID: 12852
// Function ID: 12853
// Name: useIsForumChannelSearchActive
// Dependencies: [7187, 12835, 504, 2]
// Exports: useIsForumChannelSearchActive

// Module 12852 (useIsForumChannelSearchActive)
import ForumSearchStore from "ForumSearchStore" /* 7187 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/forums/native/hooks/useIsForumChannelSearchActive.tsx");

export const useIsForumChannelSearchActive = function useIsForumChannelSearchActive(channelId) {
  _require = channelId;
  const obj = require("useCanSearchForumPostsByChannelId");
  let canSearchForumPostsByChannelId = obj.useCanSearchForumPostsByChannelId(channelId);
  require("get initialized");
  [][0] = channelId;
  if (canSearchForumPostsByChannelId) {
    canSearchForumPostsByChannelId = null != tmp3;
  }
  return canSearchForumPostsByChannelId;
};
