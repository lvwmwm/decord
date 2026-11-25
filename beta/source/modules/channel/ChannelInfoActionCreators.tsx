// Module ID: 11949
// Function ID: 11950
// Name: ChannelInfoActionCreators
// Dependencies: [6394, 8322, 572, 2]
// Exports: fetchChannelInfo

// Module 11949 (ChannelInfoActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6394 */;
import ChannelStatusStore from "ChannelStatusStore" /* 8322 */;
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
