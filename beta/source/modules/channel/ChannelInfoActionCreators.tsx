// Module ID: 11761
// Function ID: 11762
// Name: ChannelInfoActionCreators
// Dependencies: [5526, 7803, 573, 2]
// Exports: fetchChannelInfo

// Module 11761 (ChannelInfoActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5526 */;
import ChannelStatusStore from "ChannelStatusStore" /* 7803 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/channel/ChannelInfoActionCreators.tsx");

export const fetchChannelInfo = function fetchChannelInfo(guild_id) {
  if (!ChannelStatusStore.hasRequestedStatuses(guild_id)) {
    const obj2 = { type: "FETCH_CHANNEL_INFO", guildId: guild_id };
    DispatcherDefault.dispatch(obj2);
    const socket = GatewayConnectionStore.getSocket();
    const channelInfo = socket.requestChannelInfo(guild_id, ["status", "voice_start_time"]);
  }
};
