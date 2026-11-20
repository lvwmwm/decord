// Module ID: 11824
// Function ID: 11825
// Name: ChannelInfoActionCreators
// Dependencies: [6275, 8202, 572, 2]
// Exports: fetchChannelInfo

// Module 11824 (ChannelInfoActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6275 */;
import ChannelStatusStore from "ChannelStatusStore" /* 8202 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelInfoActionCreators.tsx");

export function fetchChannelInfo(guild_id) {
  if (!ChannelStatusStore.hasRequestedStatuses(guild_id)) {
    const obj2 = { type: "FETCH_CHANNEL_INFO", guildId: guild_id };
    const obj = DispatcherDefault;
    obj.dispatch(obj2);
    const socket = GatewayConnectionStore.getSocket();
    const channelInfo = socket.requestChannelInfo(guild_id, ["status", "voice_start_time"]);
  }
}
