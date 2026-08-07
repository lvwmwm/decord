// Module ID: 9670
// Function ID: 9671
// Dependencies: [4497, 709, 5258, 2]

// Module 9670
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";

let result = require("handleConnectionOpen").fileFinishedImporting("actions/ChannelCollapseActionCreators.tsx");

export default {
  update(channelId) {
    let obj = importDefault(709);
    obj = { type: "CHANNEL_COLLAPSE", channelId };
    obj.dispatch(obj);
  },
  toggleCollapseGuild(id) {
    let obj = importDefault(5258);
    obj = { hide_muted_channels: !guildCollapsed.isGuildCollapsed(id) };
    const result = obj.saveUserGuildSettings(id, obj);
    obj = { type: "GUILD_TOGGLE_COLLAPSE_MUTED", guildId: id };
    importDefault(709).dispatch(obj);
  }
};
