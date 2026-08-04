// Module ID: 12049
// Function ID: 12050
// Name: useFavoritesGuildChannelFilter
// Dependencies: [19, 1372, 3913, 1375, 676, 9629, 589, 7230, 1865, 1351, 2]
// Exports: default

// Module 12049 (useFavoritesGuildChannelFilter)
import noop from "noop";
import ensureGuildLoaded from "ensureGuildLoaded";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import initializeFromUserSettings from "initializeFromUserSettings";
import { Permissions } from "ME";

const require = arg1;
const result = require("getUncachedChannelPermissions").fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildChannelFilter.tsx");

export default function useFavoritesGuildChannelFilter() {
  hasHigherPrivileges = hasHigherPrivileges(stateFromStores[5]).useFavoritesAccess().hasHigherPrivileges;
  const obj = hasHigherPrivileges(stateFromStores[5]);
  const items = [initializeFromUserSettings];
  stateFromStores = hasHigherPrivileges(stateFromStores[6]).useStateFromStores(items, () => favoriteChannels.getFavoriteChannels());
  const items1 = [stateFromStores, hasHigherPrivileges];
  return React.useCallback((type) => {
    type = type.type;
    if (hasHigherPrivileges(stateFromStores[7]).AutocompleterResultTypes.USER === type) {
      const dMChannelFromUserId = outer1_3.getDMChannelFromUserId(type.record.id);
      let tmp14 = !arg1;
      if (!arg1) {
        tmp14 = null == dMChannelFromUserId;
      }
      let tmp16 = !tmp14;
      if (!tmp14) {
        let tmp18 = null == dMChannelFromUserId;
        if (!tmp18) {
          tmp18 = null == stateFromStores[dMChannelFromUserId.id];
        }
        tmp16 = tmp18;
      }
      return tmp16;
    } else if (tmp(tmp2[7]).AutocompleterResultTypes.GROUP_DM === type) {
      return null == stateFromStores[type.record.id];
    } else {
      if (tmp(tmp2[7]).AutocompleterResultTypes.TEXT_CHANNEL !== type) {
        if (tmp(tmp2[7]).AutocompleterResultTypes.VOICE_CHANNEL !== type) {
          let tmpResult = tmp(tmp2[9]);
          return tmpResult.assertNever(type);
        }
      }
      let canResult = outer1_4.can(outer1_6.VIEW_CHANNEL, type.record);
      if (canResult) {
        tmpResult = tmp(tmp2[8]);
        canResult = tmpResult.canFavoriteChannelType(type.record, hasHigherPrivileges);
      }
      if (canResult) {
        canResult = null == stateFromStores[type.record.id];
      }
      return canResult;
    }
  }, items1);
};
