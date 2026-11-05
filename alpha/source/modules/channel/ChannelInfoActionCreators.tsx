// Module ID: 11744
// Function ID: 11745
// Name: ChannelInfoActionCreators
// Dependencies: [6706, 7853, 572, 2]
// Exports: fetchChannelInfo

// Module 11744 (ChannelInfoActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6706 */;
import ChannelStatusStore from "ChannelStatusStore" /* 7853 */;
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
