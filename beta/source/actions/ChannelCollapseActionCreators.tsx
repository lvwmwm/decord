// Module ID: 11268
// Function ID: 11269
// Name: ChannelCollapseActionCreators
// Dependencies: [4939, 577, 7363, 2]

// Module 11268 (ChannelCollapseActionCreators)
import DispatcherDefault from "Dispatcher" /* 577 */;
import UserGuildSettingsManagerDefault from "UserGuildSettingsManager" /* 7363 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4939 */;

const size = fn(2);
let result = size.fileFinishedImporting("actions/ChannelCollapseActionCreators.tsx");

export default {
  update(channelId) {
    DispatcherDefault.dispatch({ type: "CHANNEL_COLLAPSE", channelId });
  },
  toggleCollapseGuild(id) {
    const obj = UserGuildSettingsManagerDefault;
    const result = obj.saveUserGuildSettings(id, { hide_muted_channels: !UserGuildSettingsStore.isGuildCollapsed(id) });
    const obj2 = { hide_muted_channels: !UserGuildSettingsStore.isGuildCollapsed(id) };
    DispatcherDefault.dispatch({ type: "GUILD_TOGGLE_COLLAPSE_MUTED", guildId: id });
  }
};
