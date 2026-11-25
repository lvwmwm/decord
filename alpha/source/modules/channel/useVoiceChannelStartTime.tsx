// Module ID: 17903
// Function ID: 17904
// Name: useVoiceChannelStartTime
// Dependencies: [19, 5818, 6135, 11867, 1071, 504, 11921, 2]
// Exports: useStartTime

// Module 17903 (useVoiceChannelStartTime)
import Constants from "Constants" /* 1071 */;
import ChannelInfoActionCreators from "ChannelInfoActionCreators" /* 11921 */;
import react from "react" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5818 */;
import GuildAvailabilityStore from "GuildAvailabilityStore" /* 6135 */;
import VoiceChannelStartTimeStore from "VoiceChannelStartTimeStore" /* 11867 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_4;

const ChannelTypes = Constants.ChannelTypes;
const result = size.fileFinishedImporting("modules/channel/useVoiceChannelStartTime.tsx");

export function useStartTime(channel) {
  let hasRequestedStartTimes;
  let stateFromStores;
  _require = channel;
  let obj = require("get initialized");
  const items = [VoiceChannelStartTimeStore, closure_4];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { hasRequestedStartTimes: VoiceChannelStartTimeStore.hasRequestedStartTimes(channel.guild_id), startTime: VoiceChannelStartTimeStore.getStartTime(channel), isGuildUnavailable: GuildAvailabilityStore.isUnavailable(channel.guild_id) };
    return obj;
  });
  hasRequestedStartTimes = stateFromStoresObject.hasRequestedStartTimes;
  const isGuildUnavailable = stateFromStoresObject.isGuildUnavailable;
  const startTime = stateFromStoresObject.startTime;
  const items1 = [stateFromStores];
  const obj2 = require("get initialized");
  stateFromStores = obj2.useStateFromStores(items1, () => stateFromStores.isConnected());
  closure_4 = tmp3;
  const items2 = [tmp3, channel.guild_id, hasRequestedStartTimes, isGuildUnavailable, stateFromStores];
  const effect = isGuildUnavailable.useEffect(() => {
    const tmp = !hasRequestedStartTimes && closure_4 && !isGuildUnavailable && stateFromStores;
    if (tmp) {
      const obj = ChannelInfoActionCreators;
      const channelInfo = obj.fetchChannelInfo(channel.guild_id);
    }
  }, items2);
  return startTime;
}
