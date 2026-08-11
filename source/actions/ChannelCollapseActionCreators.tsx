// Module ID: 9741
// Function ID: 9742
// Dependencies: [4499, 709, 5259, 2]

// Module 9741
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";

let result = require("handleConnectionOpen").fileFinishedImporting("actions/ChannelCollapseActionCreators.tsx");

export default {
  update(channelId) {
    let obj = importDefault(709);
    obj = { type: "CHANNEL_COLLAPSE", channelId };
    obj.dispatch(obj);
  },
  toggleCollapseGuild(id) {
    let obj = importDefault(5259);
    obj = { hide_muted_channels: !guildCollapsed.isGuildCollapsed(id) };
    const result = obj.saveUserGuildSettings(id, obj);
    obj = { type: "GUILD_TOGGLE_COLLAPSE_MUTED", guildId: id };
    importDefault(709).dispatch(obj);
  }
};
