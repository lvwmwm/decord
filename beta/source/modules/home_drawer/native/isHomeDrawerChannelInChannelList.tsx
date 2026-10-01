// Module ID: 15955
// Function ID: 15956
// Name: isHomeDrawerChannelInChannelList
// Dependencies: [5017, 504, 6955, 2]
// Exports: useIsHomeDrawerChannelInChannelList

// Module 15955 (isHomeDrawerChannelInChannelList)
import get_initialized from "get initialized" /* 504 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5017 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/home_drawer/native/isHomeDrawerChannelInChannelList.tsx");

export const useIsHomeDrawerChannelInChannelList = function useIsHomeDrawerChannelInChannelList() {
  let obj = get_initialized;
  const items = [UserGuildSettingsStore];
  return obj.useStateFromStores(items, () => {
    let channelRecordOrParentOptedIn;
    return (guild_id) => {
      const obj = closure_1_0(closure_1_1[2]);
      const result = obj.isOptInEnabledForGuild(guild_id.guild_id);
      let result1 = !result;
      if (result) {
        result1 = channelRecordOrParentOptedIn.isChannelRecordOrParentOptedIn(guild_id);
      }
      return result1;
    };
  }, [], get_initialized.statesWillNeverBeEqual);
};
