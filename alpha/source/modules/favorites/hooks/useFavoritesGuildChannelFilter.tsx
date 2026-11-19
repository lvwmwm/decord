// Module ID: 13793
// Function ID: 13794
// Name: useFavoritesGuildChannelFilter
// Dependencies: [19, 4641, 4724, 4644, 1072, 504, 9940, 4666, 1255, 2]
// Exports: default

// Module 13793 (useFavoritesGuildChannelFilter)
import Constants from "Constants" /* 1072 */;
import GlobalUtils from "GlobalUtils" /* 1255 */;
import FavoritesUtils from "FavoritesUtils" /* 4666 */;
import _mod9940 from "module_9940" /* 9940 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4641 */;
import PermissionStore from "PermissionStore" /* 4724 */;
import FavoriteStore from "FavoriteStore" /* 4644 */;
import size from "module_2" /* 2 */;

let type;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildChannelFilter.tsx");

export default function useFavoritesGuildChannelFilter() {
  let favoriteChannels;
  let stateFromStores;
  const items = [FavoriteStore];
  const obj = stateFromStores(504);
  stateFromStores = obj.useStateFromStores(items, () => favoriteChannels.getFavoriteChannels());
  const items1 = [stateFromStores];
  return react.useCallback((type, arg1) => {
    type = type.type;
    if (_mod9940.AutocompleterResultTypes.USER === type) {
      const dMChannelFromUserId = ChannelStore.getDMChannelFromUserId(type.record.id);
      let tmp15 = !(!arg1 && null == dMChannelFromUserId);
      const tmp13 = !arg1 && null == dMChannelFromUserId;
      if (tmp15) {
        tmp15 = null == dMChannelFromUserId || null == stateFromStores[dMChannelFromUserId.id];
        const tmp17 = null == dMChannelFromUserId || null == stateFromStores[dMChannelFromUserId.id];
      }
      return tmp15;
    } else if (_mod9940.AutocompleterResultTypes.GROUP_DM === type) {
      return null == stateFromStores[type.record.id];
    } else {
      if (_mod9940.AutocompleterResultTypes.TEXT_CHANNEL !== type) {
        if (_mod9940.AutocompleterResultTypes.VOICE_CHANNEL !== type) {
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
};
