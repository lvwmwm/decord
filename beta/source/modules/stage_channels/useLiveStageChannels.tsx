// Module ID: 15818
// Function ID: 15819
// Name: useLiveStageChannels
// Dependencies: [2045, 4469, 2050, 2053, 504, 1370, 11, 2]
// Exports: default, getAllLiveStageChannels, useAllLiveStageChannels

// Module 15818 (useLiveStageChannels)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import StageInstanceStore from "StageInstanceStore" /* 2050 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/stage_channels/useLiveStageChannels.tsx");

export default function useLiveStageChannels(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [StageInstanceStore];
  const items1 = [arg0];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const obj = SnowflakeUtilsDefault;
    return obj.keys(StageInstanceStore.getStageInstancesByGuild(closure_0));
  }, items1);
  const items2 = [ChannelStore];
  const items3 = [stateFromStoresArray];
  const obj2 = require("get initialized");
  const stateFromStoresArray1 = obj2.useStateFromStoresArray(items2, () => {
    let channel;
    const mapped = stateFromStores.map((item) => channel.getChannel(item));
    return mapped.filter(GlobalUtils.isNotNullish);
  }, items3);
  const items4 = [PermissionStore];
  const items5 = [stateFromStoresArray1];
  const obj3 = require("get initialized");
  return obj3.useStateFromStoresArray(items4, () => stateFromStoresArray.filter((item) => closure_1_4.can(stateFromStores(closure_1_2[3]).JOIN_VOCAL_CHANNEL_PERMISSIONS, item)), items5);
};
export const getAllLiveStageChannels = function getAllLiveStageChannels() {
  const allStageInstances = StageInstanceStore.getAllStageInstances();
  return allStageInstances.reduce((arr, channel_id) => {
    channel = channel.getChannel(channel_id.channel_id);
    const canResult = null != channel && PermissionStore.can(require("StageChannelPermissions").JOIN_VOCAL_CHANNEL_PERMISSIONS, channel);
    if (canResult) {
      arr.push(channel);
    }
    return arr;
  }, []);
};
export const useAllLiveStageChannels = function useAllLiveStageChannels() {
  let stateFromStores;
  const items = [StageInstanceStore];
  const obj = stateFromStores(504);
  stateFromStores = obj.useStateFromStores(items, () => {
    allStageInstances = allStageInstances.getAllStageInstances();
    return allStageInstances.map((channel_id) => channel_id.channel_id);
  }, []);
  const items1 = [ChannelStore];
  const items2 = [stateFromStores];
  const obj2 = stateFromStores(504);
  const stateFromStoresArray = obj2.useStateFromStoresArray(items1, () => {
    let channel;
    const mapped = stateFromStores.map((item) => channel.getChannel(item));
    return mapped.filter(GlobalUtils.isNotNullish);
  }, items2);
  const items3 = [PermissionStore];
  const items4 = [stateFromStoresArray];
  const obj3 = stateFromStores(504);
  return obj3.useStateFromStoresArray(items3, () => stateFromStoresArray.filter((item) => closure_1_4.can(stateFromStores(closure_1_2[3]).JOIN_VOCAL_CHANNEL_PERMISSIONS, item)), items4);
};
