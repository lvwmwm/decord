// Module ID: 11312
// Function ID: 11313
// Name: ChannelCollapseActionCreators
// Dependencies: [5008, 573, 7447, 2]

// Module 11312 (ChannelCollapseActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import UserGuildSettingsManagerDefault from "UserGuildSettingsManager" /* 7447 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5008 */;

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
