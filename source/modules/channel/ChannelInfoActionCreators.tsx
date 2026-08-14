// Module ID: 10430
// Function ID: 10431
// Name: fetchChannelInfo
// Dependencies: [5057, 7058, 709, 2]
// Exports: fetchChannelInfo

// Module 10430 (fetchChannelInfo)
import _handleConnectionOpen from "_handleConnectionOpen";
import handleConnectionReset from "handleConnectionReset";

const result = require("dispatcher").fileFinishedImporting("modules/channel/ChannelInfoActionCreators.tsx");

export const fetchChannelInfo = function fetchChannelInfo(guild_id) {
  if (!handleConnectionReset.hasRequestedStatuses(guild_id)) {
    let obj = importDefault(709);
    obj = { type: "FETCH_CHANNEL_INFO", guildId: null };
    obj[1] = guild_id;
    obj.dispatch(obj);
    socket = socket.getSocket();
    const channelInfo = socket.requestChannelInfo(guild_id, ["status", "voice_start_time"]);
  }
};
