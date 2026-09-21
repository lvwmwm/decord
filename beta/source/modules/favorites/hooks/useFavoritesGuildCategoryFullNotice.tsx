// Module ID: 16446
// Function ID: 16447
// Name: useFavoritesGuildCategoryFullNotice
// Dependencies: [2048, 2058, 1078, 558, 568, 504, 10606, 2070, 1119, 3328, 2]

// Module 16446 (useFavoritesGuildCategoryFullNotice)
import c from "c" /* 568 */;
import _modDef3328 from "module_3328" /* 3328 */;
import FavoriteStore from "FavoriteStore" /* 2048 */;

const initialize = intl(504);
const util = intl(1119);
const FavoritesUtils = intl(2070);
const FavoritesHooks = intl(10606);
require = fn;
let closure_4 = fn(2058).FAVORITES_AUTO_ADDED_THREADS_CATEGORY_NAME;
const ChannelTypes = fn(1078).ChannelTypes;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildCategoryFullNotice.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((getGuildId, str) => {
  let intl = require;
  let stringResult = dependencyMap;
  const cResult = c.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FavoriteStore];
    const fn = function _() {
      return autoAddJoinedThreads.autoAddJoinedThreads;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp3 = items;
    tmp4 = fn;
  } else {
    [tmp3, tmp4] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp3, tmp4);
  FavoritesHooks;
  let tmp9 = null;
  if (stateFromStores) {
    tmp9 = null;
    if (tmp8) {
      tmp9 = null;
      if (null != str) {
        tmp9 = null;
        if (intlResult2.isFavoritesGuildId(getGuildId.getGuildId())) {
          tmp9 = null;
          if (getGuildId.type === ChannelTypes.GUILD_CATEGORY) {
            const formatted = str.trim().toLowerCase();
            tmp9 = null;
            if (formatted === closure_4.toLowerCase()) {
              const _Symbol = Symbol;
              if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
                const obj2 = { label: null, tooltip: null };
                const intl2 = util.intl;
                obj2.label = intl2.string(_modDef3328.WsUrMD);
                intl = util.intl;
                stringResult = intl.string(_modDef3328.dW9Kov);
                obj2.tooltip = stringResult;
                cResult[2] = obj2;
              }
            }
            str = str.trim();
          }
        }
        intlResult2 = FavoritesUtils;
      }
    }
  }
  return tmp9;
}) : ((getGuildId, str) => {
  const items = [FavoriteStore];
  const stateFromStores = initialize.useStateFromStores(items, () => autoAddJoinedThreads.autoAddJoinedThreads);
  FavoritesHooks;
  let tmp6 = null;
  if (stateFromStores) {
    tmp6 = null;
    if (tmp5) {
      tmp6 = null;
      if (null != str) {
        tmp6 = null;
        if (tmpResult.isFavoritesGuildId(getGuildId.getGuildId())) {
          tmp6 = null;
          if (getGuildId.type === ChannelTypes.GUILD_CATEGORY) {
            const formatted = str.trim().toLowerCase();
            tmp6 = null;
            if (formatted === closure_4.toLowerCase()) {
              const obj2 = { label: null, tooltip: null };
              const intl = tmp(1119).intl;
              obj2.label = intl.string(_modDef3328.WsUrMD);
              const intl2 = tmp(1119).intl;
              obj2.tooltip = intl2.string(_modDef3328.dW9Kov);
              tmp6 = obj2;
            }
            str = str.trim();
          }
        }
        tmpResult = tmp(2070);
      }
    }
  }
  return tmp6;
});
