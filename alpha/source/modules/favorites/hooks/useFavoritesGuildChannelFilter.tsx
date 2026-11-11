// Module ID: 15046
// Function ID: 15047
// Name: useFavoritesGuildChannelFilter
// Dependencies: [19, 5092, 5175, 5095, 1072, 504, 10180, 5117, 1380, 2]
// Exports: default

// Module 15046 (useFavoritesGuildChannelFilter)
import Constants from "Constants" /* 1072 */;
import GlobalUtils from "GlobalUtils" /* 1380 */;
import FavoritesUtils from "FavoritesUtils" /* 5117 */;
import _mod10180 from "module_10180" /* 10180 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 5092 */;
import PermissionStore from "PermissionStore" /* 5175 */;
import FavoriteStore from "FavoriteStore" /* 5095 */;
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
    if (_mod10180.AutocompleterResultTypes.USER === type) {
      const dMChannelFromUserId = ChannelStore.getDMChannelFromUserId(type.record.id);
      let tmp15 = !(!arg1 && null == dMChannelFromUserId);
      const tmp13 = !arg1 && null == dMChannelFromUserId;
      if (tmp15) {
        tmp15 = null == dMChannelFromUserId || null == stateFromStores[dMChannelFromUserId.id];
        const tmp17 = null == dMChannelFromUserId || null == stateFromStores[dMChannelFromUserId.id];
      }
      return tmp15;
    } else if (_mod10180.AutocompleterResultTypes.GROUP_DM === type) {
      return null == stateFromStores[type.record.id];
    } else {
      if (_mod10180.AutocompleterResultTypes.TEXT_CHANNEL !== type) {
        if (_mod10180.AutocompleterResultTypes.VOICE_CHANNEL !== type) {
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
