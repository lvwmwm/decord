// Module ID: 10636
// Function ID: 10637
// Name: ChannelInfoActionCreators
// Dependencies: [5754, 7245, 584, 2]
// Exports: fetchChannelInfo

// Module 10636 (ChannelInfoActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5754 */;
import ChannelStatusStore from "ChannelStatusStore" /* 7245 */;
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
