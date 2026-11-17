// Module ID: 15183
// Function ID: 15184
// Name: useFavoritesGuildChannelFilter
// Dependencies: [19, 5159, 5242, 5162, 1072, 504, 10680, 5184, 1255, 2]
// Exports: default

// Module 15183 (useFavoritesGuildChannelFilter)
import Constants from "Constants" /* 1072 */;
import GlobalUtils from "GlobalUtils" /* 1255 */;
import FavoritesUtils from "FavoritesUtils" /* 5184 */;
import _mod10680 from "module_10680" /* 10680 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 5159 */;
import PermissionStore from "PermissionStore" /* 5242 */;
import FavoriteStore from "FavoriteStore" /* 5162 */;
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
    if (_mod10680.AutocompleterResultTypes.USER === type) {
      const dMChannelFromUserId = ChannelStore.getDMChannelFromUserId(type.record.id);
      let tmp15 = !(!arg1 && null == dMChannelFromUserId);
      const tmp13 = !arg1 && null == dMChannelFromUserId;
      if (tmp15) {
        tmp15 = null == dMChannelFromUserId || null == stateFromStores[dMChannelFromUserId.id];
        const tmp17 = null == dMChannelFromUserId || null == stateFromStores[dMChannelFromUserId.id];
      }
      return tmp15;
    } else if (_mod10680.AutocompleterResultTypes.GROUP_DM === type) {
      return null == stateFromStores[type.record.id];
    } else {
      if (_mod10680.AutocompleterResultTypes.TEXT_CHANNEL !== type) {
        if (_mod10680.AutocompleterResultTypes.VOICE_CHANNEL !== type) {
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
