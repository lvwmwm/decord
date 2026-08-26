// Module ID: 9959
// Function ID: 9960
// Dependencies: [4653, 709, 5431, 2]

// Module 9959
import dispatcherDefault from "dispatcher" /* 709 */;
import handleConnectionOpenDefault from "handleConnectionOpen" /* 5431 */;
import closure_2 from "updateUserGuildSettingsInternal" /* 4653 */;

let result = require("set").fileFinishedImporting("actions/ChannelCollapseActionCreators.tsx");

export default {
  update(channelId) {
    let obj = dispatcherDefault;
    obj = { type: "CHANNEL_COLLAPSE", channelId };
    obj.dispatch(obj);
  },
  toggleCollapseGuild(id) {
    let obj = handleConnectionOpenDefault;
    obj = { hide_muted_channels: !guildCollapsed.isGuildCollapsed(id) };
    const result = obj.saveUserGuildSettings(id, obj);
    obj = { type: "GUILD_TOGGLE_COLLAPSE_MUTED", guildId: id };
    dispatcherDefault.dispatch(obj);
  }
};
