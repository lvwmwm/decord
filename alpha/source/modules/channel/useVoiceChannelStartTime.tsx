// Module ID: 18440
// Function ID: 18441
// Name: useVoiceChannelStartTime
// Dependencies: [19, 6688, 6894, 10246, 1072, 504, 11684, 2]
// Exports: useStartTime

// Module 18440 (useVoiceChannelStartTime)
import Constants from "Constants" /* 1072 */;
import ChannelInfoActionCreators from "ChannelInfoActionCreators" /* 11684 */;
import react from "react" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6688 */;
import GuildAvailabilityStore from "GuildAvailabilityStore" /* 6894 */;
import VoiceChannelStartTimeStore from "VoiceChannelStartTimeStore" /* 10246 */;
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
