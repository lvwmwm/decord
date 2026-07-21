// Module ID: 11371
// Function ID: 88403
// Name: getCurrentAndNextResourceChannel
// Dependencies: []
// Exports: default, usePreviousAndNextResourceChannel

// Module 11371 (getCurrentAndNextResourceChannel)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/guild_onboarding_home/getNextResourceChannel.tsx");

export default function getCurrentAndNextResourceChannel(arg0, arg1) {
  const resourceChannels = resourceChannels.getResourceChannels(arg0);
  const findIndexResult = resourceChannels.findIndex((channelId) => channelId.channelId === arg1);
  if (findIndexResult < 0) {
    let items = [true, true];
  } else {
    items = [resourceChannels[findIndexResult], resourceChannels[(findIndexResult + 1) % resourceChannels.length]];
  }
  return items;
};
export const usePreviousAndNextResourceChannel = function usePreviousAndNextResourceChannel(guild_id, id) {
  id = guild_id;
  const dependencyMap = id;
  const items = [closure_2];
  const stateFromStores = id(dependencyMap[1]).useStateFromStores(items, () => resourceChannels.getResourceChannels(arg0));
  const findIndexResult = stateFromStores.findIndex((channelId) => channelId.channelId === arg1);
  if (findIndexResult >= 0) {
    if (stateFromStores.length > 1) {
      if (2 === stateFromStores.length) {
        const items1 = [true, stateFromStores[1 - findIndexResult]];
        let items2 = items1;
      } else {
        items2 = [stateFromStores[(findIndexResult - 1) % stateFromStores.length], stateFromStores[(findIndexResult + 1) % stateFromStores.length]];
      }
    }
    return items2;
  }
  items2 = [true, true];
};
