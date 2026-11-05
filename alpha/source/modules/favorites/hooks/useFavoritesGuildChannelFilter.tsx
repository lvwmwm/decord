// Module ID: 14629
// Function ID: 14630
// Name: useFavoritesGuildChannelFilter
// Dependencies: [19, 4992, 5075, 4995, 1072, 504, 9287, 5017, 1380, 2]
// Exports: default

// Module 14629 (useFavoritesGuildChannelFilter)
import Constants from "Constants" /* 1072 */;
import GlobalUtils from "GlobalUtils" /* 1380 */;
import FavoritesUtils from "FavoritesUtils" /* 5017 */;
import _mod9287 from "module_9287" /* 9287 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4992 */;
import PermissionStore from "PermissionStore" /* 5075 */;
import FavoriteStore from "FavoriteStore" /* 4995 */;
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
    if (_mod9287.AutocompleterResultTypes.USER === type) {
      const dMChannelFromUserId = ChannelStore.getDMChannelFromUserId(type.record.id);
      let tmp15 = !(!arg1 && null == dMChannelFromUserId);
      const tmp13 = !arg1 && null == dMChannelFromUserId;
      if (tmp15) {
        tmp15 = null == dMChannelFromUserId || null == stateFromStores[dMChannelFromUserId.id];
        const tmp17 = null == dMChannelFromUserId || null == stateFromStores[dMChannelFromUserId.id];
      }
      return tmp15;
    } else if (_mod9287.AutocompleterResultTypes.GROUP_DM === type) {
      return null == stateFromStores[type.record.id];
    } else {
      if (_mod9287.AutocompleterResultTypes.TEXT_CHANNEL !== type) {
        if (_mod9287.AutocompleterResultTypes.VOICE_CHANNEL !== type) {
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
