// Module ID: 14951
// Function ID: 113904
// Name: useIsHomeDrawerChannelInChannelList
// Dependencies: [4360, 566, 5771, 2]
// Exports: useIsHomeDrawerChannelInChannelList

// Module 14951 (useIsHomeDrawerChannelInChannelList)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
let result = require("useOptInEnabledForGuild").fileFinishedImporting("modules/home_drawer/native/isHomeDrawerChannelInChannelList.tsx");

export const useIsHomeDrawerChannelInChannelList = function useIsHomeDrawerChannelInChannelList() {
  const items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStores(items, () => (guild_id) => {
    let result = !outer2_0(outer2_1[2]).isOptInEnabledForGuild(guild_id.guild_id);
    if (!result) {
      result = outer2_2.isChannelRecordOrParentOptedIn(guild_id);
    }
    return result;
  }, [], require(566) /* initialize */.statesWillNeverBeEqual);
};
