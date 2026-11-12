// Module ID: 11519
// Function ID: 11520
// Name: useIsForumChannelSearchActive
// Dependencies: [8307, 11520, 504, 2]
// Exports: useIsForumChannelSearchActive

// Module 11519 (useIsForumChannelSearchActive)
import ForumSearchStore from "ForumSearchStore" /* 8307 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/forums/native/hooks/useIsForumChannelSearchActive.tsx");

export function useIsForumChannelSearchActive(channelId) {
  _require = channelId;
  const obj = require("useCanSearchForumPostsByChannelId");
  let canSearchForumPostsByChannelId = obj.useCanSearchForumPostsByChannelId(channelId);
  require("get initialized");
  [][0] = channelId;
  if (canSearchForumPostsByChannelId) {
    canSearchForumPostsByChannelId = null != tmp3;
  }
  return canSearchForumPostsByChannelId;
}
