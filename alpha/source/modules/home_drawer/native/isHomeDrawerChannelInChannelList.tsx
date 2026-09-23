// Module ID: 16721
// Function ID: 16722
// Name: isHomeDrawerChannelInChannelList
// Dependencies: [5008, 504, 7863, 2]
// Exports: useIsHomeDrawerChannelInChannelList

// Module 16721 (isHomeDrawerChannelInChannelList)
import initialize from "initialize" /* 504 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5008 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/home_drawer/native/isHomeDrawerChannelInChannelList.tsx");

export const useIsHomeDrawerChannelInChannelList = function useIsHomeDrawerChannelInChannelList() {
  const items = [UserGuildSettingsStore];
  return initialize.useStateFromStores(items, () => (guild_id) => {
    const result = closure_1_0(closure_1_1[2]).isOptInEnabledForGuild(guild_id.guild_id);
    let result1 = !result;
    if (result) {
      result1 = channelRecordOrParentOptedIn.isChannelRecordOrParentOptedIn(guild_id);
    }
    return result1;
  }, [], initialize.statesWillNeverBeEqual);
};
