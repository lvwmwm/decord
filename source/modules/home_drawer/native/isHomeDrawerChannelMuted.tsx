// Module ID: 14847
// Function ID: 113273
// Name: useIsHomeDrawerChannelMuted
// Dependencies: [3760, 1352, 4325, 566, 2]
// Exports: useIsHomeDrawerChannelMuted

// Module 14847 (useIsHomeDrawerChannelMuted)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { isThread } from "_callSuper";
import closure_4 from "_isNativeReflectConstruct";

const require = arg1;
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/home_drawer/native/isHomeDrawerChannelMuted.tsx");

export const useIsHomeDrawerChannelMuted = function useIsHomeDrawerChannelMuted() {
  const items = [_isNativeReflectConstruct, closure_4];
  return require(566) /* initialize */.useStateFromStores(items, () => (type) => {
    const tmp = outer2_3(type.type);
    if (tmp) {
      if (outer2_2.isMuted(type.id)) {
        return true;
      }
    }
    const tmp3 = tmp ? type.parent_id : type.id;
    let result = null != tmp3;
    if (result) {
      result = outer2_4.isGuildOrCategoryOrChannelMuted(type.guild_id, tmp3);
    }
    return result;
  }, [], require(566) /* initialize */.statesWillNeverBeEqual);
};
