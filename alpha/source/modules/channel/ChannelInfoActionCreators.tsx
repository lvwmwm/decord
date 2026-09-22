// Module ID: 11736
// Function ID: 11737
// Name: ChannelInfoActionCreators
// Dependencies: [5496, 7774, 573, 2]
// Exports: fetchChannelInfo

// Module 11736 (ChannelInfoActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5496 */;
import ChannelStatusStore from "ChannelStatusStore" /* 7774 */;

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
