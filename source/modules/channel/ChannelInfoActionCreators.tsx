// Module ID: 10462
// Function ID: 80716
// Name: fetchChannelInfo
// Dependencies: [4843, 5764, 686, 2]
// Exports: fetchChannelInfo

// Module 10462 (fetchChannelInfo)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";

const result = require("dispatcher").fileFinishedImporting("modules/channel/ChannelInfoActionCreators.tsx");

export const fetchChannelInfo = function fetchChannelInfo(guild_id) {
  if (!closure_3.hasRequestedStatuses(guild_id)) {
    let obj = importDefault(686);
    obj = { type: "FETCH_CHANNEL_INFO", guildId: guild_id };
    obj.dispatch(obj);
    socket = socket.getSocket();
    const channelInfo = socket.requestChannelInfo(guild_id, ["status", "voice_start_time"]);
  }
};
