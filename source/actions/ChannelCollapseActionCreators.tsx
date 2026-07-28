// Module ID: 10211
// Function ID: 78746
// Dependencies: [4360, 686, 5110, 2]

// Module 10211
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

let result = require("_isNativeReflectConstruct").fileFinishedImporting("actions/ChannelCollapseActionCreators.tsx");

export default {
  update(channelId) {
    let obj = importDefault(686);
    obj = { type: "CHANNEL_COLLAPSE", channelId };
    obj.dispatch(obj);
  },
  toggleCollapseGuild(id) {
    let obj = importDefault(5110);
    obj = { hide_muted_channels: !guildCollapsed.isGuildCollapsed(id) };
    const result = obj.saveUserGuildSettings(id, obj);
    obj = { type: "GUILD_TOGGLE_COLLAPSE_MUTED", guildId: id };
    importDefault(686).dispatch(obj);
  }
};
