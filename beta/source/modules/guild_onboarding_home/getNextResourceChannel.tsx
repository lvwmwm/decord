// Module ID: 11766
// Function ID: 11767
// Name: getNextResourceChannel
// Dependencies: [5023, 504, 2]
// Exports: default, usePreviousAndNextResourceChannel

// Module 11766 (getNextResourceChannel)
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 5023 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const result = size.fileFinishedImporting("modules/guild_onboarding_home/getNextResourceChannel.tsx");

export default function getCurrentAndNextResourceChannel(guildId, arg1) {
  let items;
  let closure_0 = arg1;
  const resourceChannels = GuildOnboardingHomeSettingsStore.getResourceChannels(guildId);
  const findIndexResult = resourceChannels.findIndex((channelId) => channelId.channelId === closure_0);
  if (findIndexResult < 0) {
    items = [null, null];
  } else {
    items = [resourceChannels[findIndexResult], resourceChannels[(findIndexResult + 1) % resourceChannels.length]];
  }
  return items;
};
export const usePreviousAndNextResourceChannel = function usePreviousAndNextResourceChannel(guild_id, id) {
  _require = guild_id;
  dependencyMap = id;
  const items = [GuildOnboardingHomeSettingsStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => GuildOnboardingHomeSettingsStore.getResourceChannels(guild_id));
  const findIndexResult = stateFromStores.findIndex((channelId) => channelId.channelId === id);
  if (findIndexResult >= 0) {
    let items2;
    if (stateFromStores.length > 1) {
      if (2 === stateFromStores.length) {
        const items1 = [null, stateFromStores[1 - findIndexResult]];
        items2 = items1;
      } else {
        items2 = [stateFromStores[(findIndexResult - 1) % stateFromStores.length], stateFromStores[(findIndexResult + 1) % stateFromStores.length]];
      }
    }
    return items2;
  }
  items2 = [null, null];
};
