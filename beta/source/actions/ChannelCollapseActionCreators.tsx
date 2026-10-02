// Module ID: 10466
// Function ID: 10467
// Name: ChannelCollapseActionCreators
// Dependencies: [5018, 585, 6538, 2]

// Module 10466 (ChannelCollapseActionCreators)
import DispatcherDefault from "Dispatcher" /* 585 */;
import UserGuildSettingsManagerDefault from "UserGuildSettingsManager" /* 6538 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5018 */;
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
