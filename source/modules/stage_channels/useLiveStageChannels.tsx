// Module ID: 14898
// Function ID: 112214
// Name: useAllVisibleChannels
// Dependencies: []
// Exports: default, getAllLiveStageChannels, useAllLiveStageChannels

// Module 14898 (useAllVisibleChannels)
function useAllVisibleChannels(arg0) {
  const arg1 = arg0;
  const items = [closure_3];
  const items1 = [arg0];
  const stateFromStoresArray = arg1(dependencyMap[4]).useStateFromStoresArray(items, () => {
    const mapped = arg0.map((channelId) => channel.getChannel(channelId));
    return mapped.filter(arg0(closure_2[5]).isNotNullish);
  }, items1);
  const importDefault = stateFromStoresArray;
  const obj = arg1(dependencyMap[4]);
  const items2 = [closure_4];
  const items3 = [stateFromStoresArray];
  return arg1(dependencyMap[4]).useStateFromStoresArray(items2, () => stateFromStoresArray.filter((channel) => closure_4.can(callback(closure_2[3]).JOIN_VOCAL_CHANNEL_PERMISSIONS, channel)), items3);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/stage_channels/useLiveStageChannels.tsx");

export default function useLiveStageChannels(arg0) {
  const arg1 = arg0;
  const items = [closure_5];
  const items1 = [arg0];
  return useAllVisibleChannels(arg1(dependencyMap[4]).useStateFromStoresArray(items, () => callback(closure_2[6]).keys(stageInstancesByGuild.getStageInstancesByGuild(arg0)), items1));
};
export const getAllLiveStageChannels = function getAllLiveStageChannels() {
  const allStageInstances = allStageInstances.getAllStageInstances();
  return allStageInstances.reduce((arr, channel_id) => {
    const channel = channel.getChannel(channel_id.channel_id);
    let canResult = null != channel;
    if (canResult) {
      canResult = closure_4.can(callback(closure_2[3]).JOIN_VOCAL_CHANNEL_PERMISSIONS, channel);
    }
    if (canResult) {
      arr.push(channel);
    }
    return arr;
  }, []);
};
export const useAllLiveStageChannels = function useAllLiveStageChannels() {
  const items = [closure_5];
  return useAllVisibleChannels(arg1(dependencyMap[4]).useStateFromStores(items, () => {
    const allStageInstances = allStageInstances.getAllStageInstances();
    return allStageInstances.map((channel_id) => channel_id.channel_id);
  }, []));
};
