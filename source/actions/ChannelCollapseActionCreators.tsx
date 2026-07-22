// Module ID: 10195
// Function ID: 78714
// Dependencies: []

// Module 10195
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("actions/ChannelCollapseActionCreators.tsx");

export default {
  update(channelId) {
    let obj = importDefault(dependencyMap[1]);
    obj = { type: "CHANNEL_COLLAPSE", channelId };
    obj.dispatch(obj);
  },
  toggleCollapseGuild(id) {
    let obj = importDefault(dependencyMap[2]);
    obj = { hide_muted_channels: !guildCollapsed.isGuildCollapsed(id) };
    const result = obj.saveUserGuildSettings(id, obj);
    obj = { type: "GUILD_TOGGLE_COLLAPSE_MUTED", guildId: id };
    importDefault(dependencyMap[1]).dispatch(obj);
  }
};
