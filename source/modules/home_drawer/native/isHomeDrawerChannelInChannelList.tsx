// Module ID: 15284
// Function ID: 15285
// Name: useIsHomeDrawerChannelInChannelList
// Dependencies: [4451, 589, 6891, 2]
// Exports: useIsHomeDrawerChannelInChannelList

// Module 15284 (useIsHomeDrawerChannelInChannelList)
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";

const require = arg1;
let result = require("useOptInEnabledForGuild").fileFinishedImporting("modules/home_drawer/native/isHomeDrawerChannelInChannelList.tsx");

export const useIsHomeDrawerChannelInChannelList = function useIsHomeDrawerChannelInChannelList() {
  const items = [updateUserGuildSettingsInternal];
  return require(589) /* initialize */.useStateFromStores(items, () => (guild_id) => {
    const result = callback(table[2]).isOptInEnabledForGuild(guild_id.guild_id);
    let result1 = !result;
    if (result) {
      result1 = channelRecordOrParentOptedIn.isChannelRecordOrParentOptedIn(guild_id);
    }
    return result1;
  }, [], require(589) /* initialize */.statesWillNeverBeEqual);
};
