// Module ID: 11333
// Function ID: 11334
// Name: useFavoritesGuildChannelFilter
// Dependencies: [19, 2044, 4464, 2047, 1074, 504, 10182, 2069, 1370, 2]
// Exports: default

// Module 11333 (useFavoritesGuildChannelFilter)
import sortByMatchScore from "sortByMatchScore" /* 10182 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2044 */;
import PermissionStore from "PermissionStore" /* 4464 */;
import FavoriteStore from "FavoriteStore" /* 2047 */;

require = fn;
const Permissions = fn(1074).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildChannelFilter.tsx");

export default function useFavoritesGuildChannelFilter() {
  const items = [FavoriteStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => favoriteChannels.getFavoriteChannels());
  const items1 = [stateFromStores];
  return noop.useCallback((type, arg1) => {
    type = type.type;
    if (sortByMatchScore.AutocompleterResultTypes.USER === type) {
      const dMChannelFromUserId = ChannelStore.getDMChannelFromUserId(type.record.id);
      let tmp13 = !arg1;
      if (!arg1) {
        tmp13 = null == dMChannelFromUserId;
      }
      let tmp15 = !tmp13;
      if (!tmp13) {
        let tmp17 = null == dMChannelFromUserId;
        if (!tmp17) {
          tmp17 = null == stateFromStores[dMChannelFromUserId.id];
        }
        tmp15 = tmp17;
      }
      return tmp15;
    } else if (tmp(10182).AutocompleterResultTypes.GROUP_DM === type) {
      return null == stateFromStores[type.record.id];
    } else {
      if (tmp(10182).AutocompleterResultTypes.TEXT_CHANNEL !== type) {
        if (tmp(10182).AutocompleterResultTypes.VOICE_CHANNEL !== type) {
          return tmp(1370).assertNever(type);
        }
      }
      let canResult = PermissionStore.can(Permissions.VIEW_CHANNEL, type.record);
      if (canResult) {
        canResult = tmp(2069).isFavoritableChannel(type.record);
        const tmpResult2 = tmp(2069);
      }
      if (canResult) {
        canResult = null == stateFromStores[type.record.id];
      }
      return canResult;
    }
  }, items1);
};
