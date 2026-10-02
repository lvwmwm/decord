// Module ID: 10881
// Function ID: 10882
// Name: ChannelInfoActionCreators
// Dependencies: [5590, 6953, 585, 2]
// Exports: fetchChannelInfo

// Module 10881 (ChannelInfoActionCreators)
import DispatcherDefault from "Dispatcher" /* 585 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5590 */;
import ChannelStatusStore from "ChannelStatusStore" /* 6953 */;
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
