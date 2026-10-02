// Module ID: 10475
// Function ID: 10476
// Name: useFavoritesGuildChannelFilter
// Dependencies: [19, 2051, 4472, 2054, 1086, 558, 576, 504, 9268, 2076, 1376, 2]

// Module 10475 (useFavoritesGuildChannelFilter)
import Constants from "Constants" /* 1086 */;
import GlobalUtils from "GlobalUtils" /* 1376 */;
import FavoritesUtils from "FavoritesUtils" /* 2076 */;
import _mod9268 from "module_9268" /* 9268 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import PermissionStore from "PermissionStore" /* 4472 */;
import FavoriteStore from "FavoriteStore" /* 2054 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let favoriteChannels;
  let stateFromStores;
  let tmp4;
  let tmp5;
  let tmp8;
  const obj = stateFromStores(576);
  const cResult = obj.c(4);
  const tmp = stateFromStores;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FavoriteStore];
    const fn = function n() {
      return favoriteChannels.getFavoriteChannels();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let tmpResult = tmp(504);
  stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] !== stateFromStores) {
    const fn2 = function p(type, arg1) {
      type = type.type;
      if (_mod9268.AutocompleterResultTypes.USER === type) {
        const dMChannelFromUserId = ChannelStore.getDMChannelFromUserId(type.record.id);
        let tmp15 = !(!arg1 && null == dMChannelFromUserId);
        const tmp13 = !arg1 && null == dMChannelFromUserId;
        if (tmp15) {
          tmp15 = null == dMChannelFromUserId || null == stateFromStores[dMChannelFromUserId.id];
          const tmp17 = null == dMChannelFromUserId || null == stateFromStores[dMChannelFromUserId.id];
        }
        return tmp15;
      } else if (_mod9268.AutocompleterResultTypes.GROUP_DM === type) {
        return null == stateFromStores[type.record.id];
      } else {
        if (_mod9268.AutocompleterResultTypes.TEXT_CHANNEL !== type) {
          if (_mod9268.AutocompleterResultTypes.VOICE_CHANNEL !== type) {
            const tmpResult = GlobalUtils;
            return tmpResult.assertNever(type);
          }
        }
        let canResult = PermissionStore.can(Permissions.VIEW_CHANNEL, type.record);
        if (canResult) {
          const tmpResult2 = FavoritesUtils;
          canResult = tmpResult2.isFavoritableChannel(type.record);
        }
        if (canResult) {
          canResult = null == stateFromStores[type.record.id];
        }
        return canResult;
      }
    };
    cResult[2] = stateFromStores;
    cResult[3] = fn2;
    tmp8 = fn2;
  } else {
    tmp8 = cResult[3];
  }
  return tmp8;
}) : (() => {
  let favoriteChannels;
  let stateFromStores;
  const items = [FavoriteStore];
  const obj = stateFromStores(504);
  stateFromStores = obj.useStateFromStores(items, () => favoriteChannels.getFavoriteChannels());
  const items1 = [stateFromStores];
  return react.useCallback((type, arg1) => {
    type = type.type;
    if (_mod9268.AutocompleterResultTypes.USER === type) {
      const dMChannelFromUserId = ChannelStore.getDMChannelFromUserId(type.record.id);
      let tmp15 = !(!arg1 && null == dMChannelFromUserId);
      const tmp13 = !arg1 && null == dMChannelFromUserId;
      if (tmp15) {
        tmp15 = null == dMChannelFromUserId || null == stateFromStores[dMChannelFromUserId.id];
        const tmp17 = null == dMChannelFromUserId || null == stateFromStores[dMChannelFromUserId.id];
      }
      return tmp15;
    } else if (_mod9268.AutocompleterResultTypes.GROUP_DM === type) {
      return null == stateFromStores[type.record.id];
    } else {
      if (_mod9268.AutocompleterResultTypes.TEXT_CHANNEL !== type) {
        if (_mod9268.AutocompleterResultTypes.VOICE_CHANNEL !== type) {
          const tmpResult = GlobalUtils;
          return tmpResult.assertNever(type);
        }
      }
      let canResult = PermissionStore.can(Permissions.VIEW_CHANNEL, type.record);
      if (canResult) {
        const tmpResult2 = FavoritesUtils;
        canResult = tmpResult2.isFavoritableChannel(type.record);
      }
      if (canResult) {
        canResult = null == stateFromStores[type.record.id];
      }
      return canResult;
    }
  }, items1);
});
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildChannelFilter.tsx");

export default tmp2;
