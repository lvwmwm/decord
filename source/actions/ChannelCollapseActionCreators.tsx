// Module ID: 10228
// Function ID: 10229
// Dependencies: [4385, 709, 5132, 2]

// Module 10228
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";

let result = require("handleConnectionOpen").fileFinishedImporting("actions/ChannelCollapseActionCreators.tsx");

export default {
  update(channelId) {
    let obj = importDefault(709);
    obj = { type: "CHANNEL_COLLAPSE", channelId };
    obj.dispatch(obj);
  },
  toggleCollapseGuild(id) {
    let obj = importDefault(5132);
    obj = { hide_muted_channels: !guildCollapsed.isGuildCollapsed(id) };
    const result = obj.saveUserGuildSettings(id, obj);
    obj = { type: "GUILD_TOGGLE_COLLAPSE_MUTED", guildId: id };
    importDefault(709).dispatch(obj);
  }
};
