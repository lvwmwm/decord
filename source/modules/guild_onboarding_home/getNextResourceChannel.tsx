// Module ID: 11411
// Function ID: 88706
// Name: getCurrentAndNextResourceChannel
// Dependencies: [4333, 566, 2]
// Exports: default, usePreviousAndNextResourceChannel

// Module 11411 (getCurrentAndNextResourceChannel)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_onboarding_home/getNextResourceChannel.tsx");

export default function getCurrentAndNextResourceChannel(arg0, arg1) {
  let closure_0 = arg1;
  resourceChannels = resourceChannels.getResourceChannels(arg0);
  const findIndexResult = resourceChannels.findIndex((channelId) => channelId.channelId === closure_0);
  if (findIndexResult < 0) {
    let items = [null, null];
  } else {
    items = [resourceChannels[findIndexResult], resourceChannels[(findIndexResult + 1) % resourceChannels.length]];
  }
  return items;
};
export const usePreviousAndNextResourceChannel = function usePreviousAndNextResourceChannel(guild_id, id) {
  const _require = guild_id;
  const dependencyMap = id;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = _require(566).useStateFromStores(items, () => outer1_2.getResourceChannels(closure_0));
  const findIndexResult = stateFromStores.findIndex((channelId) => channelId.channelId === closure_1);
  if (findIndexResult >= 0) {
    if (stateFromStores.length > 1) {
      if (2 === stateFromStores.length) {
        const items1 = [null, stateFromStores[1 - findIndexResult]];
        let items2 = items1;
      } else {
        items2 = [stateFromStores[(findIndexResult - 1) % stateFromStores.length], stateFromStores[(findIndexResult + 1) % stateFromStores.length]];
      }
    }
    return items2;
  }
  items2 = [null, null];
};
