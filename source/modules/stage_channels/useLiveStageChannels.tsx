// Module ID: 15061
// Function ID: 114703
// Name: useAllVisibleChannels
// Dependencies: [1348, 3758, 1353, 1356, 566, 1327, 21, 2]
// Exports: default, getAllLiveStageChannels, useAllLiveStageChannels

// Module 15061 (useAllVisibleChannels)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";

const require = arg1;
function useAllVisibleChannels(arg0) {
  const _require = arg0;
  const items = [_isNativeReflectConstruct];
  const items1 = [arg0];
  const stateFromStoresArray = _require(566).useStateFromStoresArray(items, () => {
    const mapped = lib.map((channelId) => outer2_3.getChannel(channelId));
    return mapped.filter(lib(outer1_2[5]).isNotNullish);
  }, items1);
  const obj = _require(566);
  const items2 = [closure_4];
  const items3 = [stateFromStoresArray];
  return _require(566).useStateFromStoresArray(items2, () => stateFromStoresArray.filter((channel) => outer2_4.can(callback(outer2_2[3]).JOIN_VOCAL_CHANNEL_PERMISSIONS, channel)), items3);
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/stage_channels/useLiveStageChannels.tsx");

export default function useLiveStageChannels(arg0) {
  const _require = arg0;
  const items = [closure_5];
  const items1 = [arg0];
  return useAllVisibleChannels(_require(566).useStateFromStoresArray(items, () => outer1_1(outer1_2[6]).keys(outer1_5.getStageInstancesByGuild(closure_0)), items1));
};
export const getAllLiveStageChannels = function getAllLiveStageChannels() {
  allStageInstances = allStageInstances.getAllStageInstances();
  return allStageInstances.reduce((arr, channel_id) => {
    const channel = outer1_3.getChannel(channel_id.channel_id);
    let canResult = null != channel;
    if (canResult) {
      canResult = outer1_4.can(outer1_0(outer1_2[3]).JOIN_VOCAL_CHANNEL_PERMISSIONS, channel);
    }
    if (canResult) {
      arr.push(channel);
    }
    return arr;
  }, []);
};
export const useAllLiveStageChannels = function useAllLiveStageChannels() {
  const items = [closure_5];
  return useAllVisibleChannels(require(566) /* initialize */.useStateFromStores(items, () => {
    const allStageInstances = outer1_5.getAllStageInstances();
    return allStageInstances.map((channel_id) => channel_id.channel_id);
  }, []));
};
