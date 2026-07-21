// Module ID: 10447
// Function ID: 80647
// Name: fetchChannelInfo
// Dependencies: []
// Exports: fetchChannelInfo

// Module 10447 (fetchChannelInfo)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/channel/ChannelInfoActionCreators.tsx");

export const fetchChannelInfo = function fetchChannelInfo(guild_id) {
  if (!closure_3.hasRequestedStatuses(guild_id)) {
    let obj = importDefault(dependencyMap[2]);
    obj = { type: "FETCH_CHANNEL_INFO", guildId: guild_id };
    obj.dispatch(obj);
    const socket = socket.getSocket();
    const channelInfo = socket.requestChannelInfo(guild_id, ["Set", "shapes"]);
  }
};
