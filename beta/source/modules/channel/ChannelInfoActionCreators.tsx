// Module ID: 11601
// Function ID: 11602
// Name: ChannelInfoActionCreators
// Dependencies: [5496, 7776, 577, 2]
// Exports: fetchChannelInfo

// Module 11601 (ChannelInfoActionCreators)
import DispatcherDefault from "Dispatcher" /* 577 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5496 */;
import ChannelStatusStore from "ChannelStatusStore" /* 7776 */;

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
