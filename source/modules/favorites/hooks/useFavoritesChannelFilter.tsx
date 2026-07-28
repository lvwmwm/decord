// Module ID: 11858
// Function ID: 91852
// Name: useFavoritesChannelFilter
// Dependencies: [31, 1348, 3793, 1351, 653, 10194, 566, 6145, 1841, 1327, 2]
// Exports: default

// Module 11858 (useFavoritesChannelFilter)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { Permissions } from "ME";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/favorites/hooks/useFavoritesChannelFilter.tsx");

export default function useFavoritesChannelFilter() {
  hasHigherPrivileges = hasHigherPrivileges(stateFromStores[5]).useFavoritesAccess().hasHigherPrivileges;
  const obj = hasHigherPrivileges(stateFromStores[5]);
  const items = [closure_5];
  stateFromStores = hasHigherPrivileges(stateFromStores[6]).useStateFromStores(items, () => outer1_5.getFavoriteChannels());
  const items1 = [stateFromStores, hasHigherPrivileges];
  return React.useCallback((type) => {
    type = type.type;
    if (hasHigherPrivileges(stateFromStores[7]).AutocompleterResultTypes.USER === type) {
      const dMChannelFromUserId = outer1_3.getDMChannelFromUserId(type.record.id);
      let tmp18 = !arg1;
      if (tmp18) {
        tmp18 = null == dMChannelFromUserId;
      }
      let tmp20 = !tmp18;
      if (!tmp18) {
        let tmp22 = null == dMChannelFromUserId;
        if (!tmp22) {
          tmp22 = null == stateFromStores[dMChannelFromUserId.id];
        }
        tmp20 = tmp22;
      }
      return tmp20;
    } else if (hasHigherPrivileges(stateFromStores[7]).AutocompleterResultTypes.GROUP_DM === type) {
      return null == stateFromStores[type.record.id];
    } else {
      if (hasHigherPrivileges(stateFromStores[7]).AutocompleterResultTypes.TEXT_CHANNEL !== type) {
        if (hasHigherPrivileges(stateFromStores[7]).AutocompleterResultTypes.VOICE_CHANNEL !== type) {
          return hasHigherPrivileges(stateFromStores[9]).assertNever(type);
        }
      }
      let canResult = outer1_4.can(outer1_6.VIEW_CHANNEL, type.record);
      if (canResult) {
        canResult = hasHigherPrivileges(stateFromStores[8]).canFavoriteChannelType(type.record, hasHigherPrivileges);
        const obj2 = hasHigherPrivileges(stateFromStores[8]);
      }
      if (canResult) {
        canResult = null == stateFromStores[type.record.id];
      }
      return canResult;
    }
  }, items1);
};
