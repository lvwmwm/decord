// Module ID: 13762
// Function ID: 13763
// Name: useFavoritesGuildChannelFilter
// Dependencies: [19, 4643, 4726, 4646, 1071, 504, 9943, 4668, 1254, 2]
// Exports: default

// Module 13762 (useFavoritesGuildChannelFilter)
import Constants from "Constants" /* 1071 */;
import GlobalUtils from "GlobalUtils" /* 1254 */;
import FavoritesUtils from "FavoritesUtils" /* 4668 */;
import _mod9943 from "module_9943" /* 9943 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4643 */;
import PermissionStore from "PermissionStore" /* 4726 */;
import FavoriteStore from "FavoriteStore" /* 4646 */;
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
    if (_mod9943.AutocompleterResultTypes.USER === type) {
      const dMChannelFromUserId = ChannelStore.getDMChannelFromUserId(type.record.id);
      let tmp15 = !(!arg1 && null == dMChannelFromUserId);
      const tmp13 = !arg1 && null == dMChannelFromUserId;
      if (tmp15) {
        tmp15 = null == dMChannelFromUserId || null == stateFromStores[dMChannelFromUserId.id];
        const tmp17 = null == dMChannelFromUserId || null == stateFromStores[dMChannelFromUserId.id];
      }
      return tmp15;
    } else if (_mod9943.AutocompleterResultTypes.GROUP_DM === type) {
      return null == stateFromStores[type.record.id];
    } else {
      if (_mod9943.AutocompleterResultTypes.TEXT_CHANNEL !== type) {
        if (_mod9943.AutocompleterResultTypes.VOICE_CHANNEL !== type) {
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
