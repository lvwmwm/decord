// Module ID: 11409
// Function ID: 11410
// Name: fetchChannelInfo
// Dependencies: [5238, 7462, 706, 2]
// Exports: fetchChannelInfo

// Module 11409 (fetchChannelInfo)
import dispatcherDefault from "dispatcher" /* 706 */;
import closure_2 from "_handleConnectionOpen" /* 5238 */;
import closure_3 from "handleConnectionReset" /* 7462 */;

const result = require("set").fileFinishedImporting("modules/channel/ChannelInfoActionCreators.tsx");

export const fetchChannelInfo = function fetchChannelInfo(guild_id) {
  if (!closure_3.hasRequestedStatuses(guild_id)) {
    let obj = dispatcherDefault;
    obj = { type: "FETCH_CHANNEL_INFO", guildId: null };
    obj[1] = guild_id;
    obj.dispatch(obj);
    socket = socket.getSocket();
    const channelInfo = socket.requestChannelInfo(guild_id, ["status", "voice_start_time"]);
  }
};
