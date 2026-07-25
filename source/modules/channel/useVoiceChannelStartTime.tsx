// Module ID: 15113
// Function ID: 115068
// Name: useStartTime
// Dependencies: [31, 4809, 4470, 9435, 653, 566, 10421, 2]
// Exports: useStartTime

// Module 15113 (useStartTime)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { ChannelTypes } from "ME";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/channel/useVoiceChannelStartTime.tsx");

export const useStartTime = function useStartTime(channel) {
  const _require = channel;
  const items = [closure_5, closure_4];
  const stateFromStoresObject = _require(hasRequestedStartTimes[5]).useStateFromStoresObject(items, () => ({ hasRequestedStartTimes: outer1_5.hasRequestedStartTimes(channel.guild_id), startTime: outer1_5.getStartTime(channel), isGuildUnavailable: tmp3.isUnavailable(channel.guild_id) }));
  hasRequestedStartTimes = stateFromStoresObject.hasRequestedStartTimes;
  const isGuildUnavailable = stateFromStoresObject.isGuildUnavailable;
  let obj = _require(hasRequestedStartTimes[5]);
  const items1 = [stateFromStores];
  stateFromStores = _require(hasRequestedStartTimes[5]).useStateFromStores(items1, () => stateFromStores.isConnected());
  closure_4 = tmp3;
  const items2 = [channel.type === ChannelTypes.GUILD_VOICE, channel.guild_id, hasRequestedStartTimes, isGuildUnavailable, stateFromStores];
  const effect = isGuildUnavailable.useEffect(() => {
    let tmp = !hasRequestedStartTimes && closure_4;
    if (tmp) {
      tmp = !isGuildUnavailable;
    }
    if (tmp) {
      tmp = stateFromStores;
    }
    if (tmp) {
      const channelInfo = channel(hasRequestedStartTimes[6]).fetchChannelInfo(channel.guild_id);
      const obj = channel(hasRequestedStartTimes[6]);
    }
  }, items2);
  return stateFromStoresObject.startTime;
};
