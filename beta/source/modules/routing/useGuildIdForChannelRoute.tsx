// Module ID: 4802
// Function ID: 4803
// Name: useGuildIdForChannelRoute
// Dependencies: [2048, 4612, 1078, 558, 568, 504, 2070, 2]
// Exports: getGuildIdForGenericRedirect

// Module 4802 (useGuildIdForChannelRoute)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import FavoriteStore from "FavoriteStore" /* 2048 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4612 */;

require = fn;
const FAVORITES = fn(1078).FAVORITES;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/routing/useGuildIdForChannelRoute.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((getGuildId) => {
  const cResult = c.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelectedGuildStore];
    const fn = function l() {
      return guildId.getGuildId();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  if (null != stateFromStores) {
    return stateFromStores;
  } else if (cResult[2] !== getGuildId) {
    const guildId = getGuildId.getGuildId();
    cResult[2] = getGuildId;
    cResult[3] = guildId;
  }
}) : ((getGuildId) => {
  const items = [SelectedGuildStore];
  let stateFromStores = initialize.useStateFromStores(items, () => guildId.getGuildId());
  if (null == stateFromStores) {
    stateFromStores = getGuildId.getGuildId();
  }
  return stateFromStores;
});
export const getGuildIdForGenericRedirect = function getGuildIdForGenericRedirect(channel) {
  if (!obj.isFavoritesGuildId(SelectedGuildStore.getGuildId())) {
    let guildId = channel.getGuildId();
  } else if (FavoriteStore.isFavorite(channel.id)) {
    guildId = FAVORITES;
  }
  return guildId;
};
