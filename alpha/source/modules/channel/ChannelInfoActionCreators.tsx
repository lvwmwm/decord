// Module ID: 12324
// Function ID: 12325
// Name: ChannelInfoActionCreators
// Dependencies: [6737, 8665, 572, 2]
// Exports: fetchChannelInfo

// Module 12324 (ChannelInfoActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6737 */;
import ChannelStatusStore from "ChannelStatusStore" /* 8665 */;
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
