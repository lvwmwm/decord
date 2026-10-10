// Module ID: 12864
// Function ID: 12865
// Name: useIsForumChannelSearchActive
// Dependencies: [7904, 558, 576, 12846, 504, 2]

// Module 12864 (useIsForumChannelSearchActive)
import ForumSearchStore from "ForumSearchStore" /* 7904 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsForumChannelSearchActive(arg0) {
  let closure_0;
  _require = arg0;
  const tmp = _require;
  const obj = require("react");
  const cResult = obj.c(4);
  const obj2 = require("useCanSearchForumPostsByChannelId");
  let canSearchForumPostsByChannelId = obj2.useCanSearchForumPostsByChannelId(arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ForumSearchStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      let searchQuery = null;
      if (null != closure_0) {
        searchQuery = ForumSearchStore.getSearchQuery(tmp);
      }
      return searchQuery;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
  }
  tmp(504);
  if (canSearchForumPostsByChannelId) {
    canSearchForumPostsByChannelId = null != tmp10;
  }
  return canSearchForumPostsByChannelId;
}) : (function useIsForumChannelSearchActive(arg0) {
  let closure_0;
  _require = arg0;
  const obj = require("useCanSearchForumPostsByChannelId");
  let canSearchForumPostsByChannelId = obj.useCanSearchForumPostsByChannelId(arg0);
  require("get initialized");
  [][0] = arg0;
  if (canSearchForumPostsByChannelId) {
    canSearchForumPostsByChannelId = null != tmp3;
  }
  return canSearchForumPostsByChannelId;
});
const result = size.fileFinishedImporting("modules/forums/native/hooks/useIsForumChannelSearchActive.tsx");

export const useIsForumChannelSearchActive = tmp2;
