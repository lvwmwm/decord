// Module ID: 10895
// Function ID: 10896
// Dependencies: [4709, 706, 7056, 2]

// Module 10895
import dispatcherDefault from "dispatcher" /* 706 */;
import handleConnectionOpenDefault from "handleConnectionOpen" /* 7056 */;
import closure_2 from "updateUserGuildSettingsInternal" /* 4709 */;

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
