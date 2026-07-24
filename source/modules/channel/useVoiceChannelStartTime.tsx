// Module ID: 15103
// Function ID: 114941
// Name: useStartTime
// Dependencies: [31, 4469, 9514, 653, 566, 10487, 2]
// Exports: useStartTime

// Module 15103 (useStartTime)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { ChannelTypes } from "ME";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/channel/useVoiceChannelStartTime.tsx");

export const useStartTime = function useStartTime(channel) {
  const _require = channel;
  const items = [closure_4, _isNativeReflectConstruct];
  const stateFromStoresObject = _require(hasRequestedStartTimes[4]).useStateFromStoresObject(items, () => ({ hasRequestedStartTimes: outer1_4.hasRequestedStartTimes(channel.guild_id), startTime: outer1_4.getStartTime(channel), isGuildUnavailable: tmp2.isUnavailable(channel.guild_id) }));
  hasRequestedStartTimes = stateFromStoresObject.hasRequestedStartTimes;
  const isGuildUnavailable = stateFromStoresObject.isGuildUnavailable;
  _isNativeReflectConstruct = tmp2;
  const items1 = [channel.type === ChannelTypes.GUILD_VOICE, channel.guild_id, hasRequestedStartTimes, isGuildUnavailable];
  const effect = isGuildUnavailable.useEffect(() => {
    let tmp = hasRequestedStartTimes;
    if (!hasRequestedStartTimes) {
      tmp = !_isNativeReflectConstruct;
    }
    if (!tmp) {
      tmp = isGuildUnavailable;
    }
    if (!tmp) {
      const channelInfo = channel(hasRequestedStartTimes[5]).fetchChannelInfo(channel.guild_id);
      const obj = channel(hasRequestedStartTimes[5]);
    }
  }, items1);
  return stateFromStoresObject.startTime;
};
