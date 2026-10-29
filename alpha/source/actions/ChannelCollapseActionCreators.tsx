// Module ID: 10953
// Function ID: 10954
// Name: ChannelCollapseActionCreators
// Dependencies: [6762, 584, 7272, 2]

// Module 10953 (ChannelCollapseActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import UserGuildSettingsManagerDefault from "UserGuildSettingsManager" /* 7272 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6762 */;
import size from "module_2" /* 2 */;

let obj = {
  update(channelId) {
    const obj = DispatcherDefault;
    const obj2 = { type: "CHANNEL_COLLAPSE", channelId };
    obj.dispatch(obj2);
  },
  toggleCollapseGuild(id) {
    const obj = UserGuildSettingsManagerDefault;
    const obj2 = { hide_muted_channels: !UserGuildSettingsStore.isGuildCollapsed(id) };
    const result = obj.saveUserGuildSettings(id, obj2);
    const obj3 = DispatcherDefault;
    const obj4 = { type: "GUILD_TOGGLE_COLLAPSE_MUTED", guildId: id };
    obj3.dispatch(obj4);
  }
};
let result = size.fileFinishedImporting("actions/ChannelCollapseActionCreators.tsx");

export default obj;
