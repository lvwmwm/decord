// Module ID: 10584
// Function ID: 10585
// Name: ChannelCollapseActionCreators
// Dependencies: [6182, 584, 7026, 2]

// Module 10584 (ChannelCollapseActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import UserGuildSettingsManagerDefault from "UserGuildSettingsManager" /* 7026 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6182 */;
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
