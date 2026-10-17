// Module ID: 11072
// Function ID: 11073
// Name: ChannelInfoActionCreators
// Dependencies: [6013, 7518, 584, 2]
// Exports: fetchChannelInfo

// Module 11072 (ChannelInfoActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6013 */;
import ChannelStatusStore from "ChannelStatusStore" /* 7518 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelInfoActionCreators.tsx");

export const fetchChannelInfo = function fetchChannelInfo(guild_id) {
  if (!ChannelStatusStore.hasRequestedStatuses(guild_id)) {
    const obj2 = { type: "FETCH_CHANNEL_INFO", guildId: guild_id };
    const obj = DispatcherDefault;
    obj.dispatch(obj2);
    const socket = GatewayConnectionStore.getSocket();
    const channelInfo = socket.requestChannelInfo(guild_id, ["status", "voice_start_time"]);
  }
};
