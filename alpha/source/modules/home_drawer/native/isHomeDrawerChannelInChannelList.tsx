// Module ID: 18337
// Function ID: 18338
// Name: isHomeDrawerChannelInChannelList
// Dependencies: [6769, 504, 6879, 2]
// Exports: useIsHomeDrawerChannelInChannelList

// Module 18337 (isHomeDrawerChannelInChannelList)
import get_initialized from "get initialized" /* 504 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6769 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/home_drawer/native/isHomeDrawerChannelInChannelList.tsx");

export function useIsHomeDrawerChannelInChannelList() {
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
}
