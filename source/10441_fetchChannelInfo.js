// Module ID: 10441
// Function ID: 80624
// Name: fetchChannelInfo
// Dependencies: []
// Exports: fetchChannelInfo

// Module 10441 (fetchChannelInfo)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/channel/ChannelInfoActionCreators.tsx");

export const fetchChannelInfo = function fetchChannelInfo(guild_id) {
  if (!closure_3.hasRequestedStatuses(guild_id)) {
    let obj = importDefault(dependencyMap[2]);
    obj = { type: "FETCH_CHANNEL_INFO", guildId: guild_id };
    obj.dispatch(obj);
    const socket = socket.getSocket();
    const channelInfo = socket.requestChannelInfo(guild_id, [0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005542247802688823, -5069154029894197000000000000000000000000000000000000000000000000000000000000000000]);
  }
};
