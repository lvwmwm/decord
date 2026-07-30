// Module ID: 14970
// Function ID: 14971
// Name: useIsHomeDrawerChannelMuted
// Dependencies: [3819, 1376, 4385, 589, 2]
// Exports: useIsHomeDrawerChannelMuted

// Module 14970 (useIsHomeDrawerChannelMuted)
import storeThread from "storeThread";
import { isThread } from "createChannelRecord";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";

const require = arg1;
let result = require("updateUserGuildSettingsInternal").fileFinishedImporting("modules/home_drawer/native/isHomeDrawerChannelMuted.tsx");

export const useIsHomeDrawerChannelMuted = function useIsHomeDrawerChannelMuted() {
  const items = [storeThread, updateUserGuildSettingsInternal];
  return require(589) /* initialize */.useStateFromStores(items, () => (type) => {
    const tmp = callback(type.type);
    if (tmp) {
      if (muted.isMuted(type.id)) {
        return true;
      }
    }
    const tmp3 = tmp ? type.parent_id : type.id;
    let result = null != tmp3;
    if (result) {
      result = guildOrCategoryOrChannelMuted.isGuildOrCategoryOrChannelMuted(type.guild_id, tmp3);
    }
    return result;
  }, [], require(589) /* initialize */.statesWillNeverBeEqual);
};
