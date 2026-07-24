// Module ID: 16253
// Function ID: 126163
// Name: dispatcher
// Dependencies: [686, 2]

// Module 16253 (dispatcher)
const result = require("set").fileFinishedImporting("modules/guild_settings/GuildSettingsModalChannelsActionCreators.tsx");

export default {
  terminate() {
    importDefault(686).dispatch({ type: "GUILD_SETTINGS_MODAL_CHANNELS_TERMINATE" });
  },
  startReordering(arg0) {
    const items = [...arguments];
    importDefault(686).dispatch({ type: "GUILD_SETTINGS_MODAL_CHANNELS_START_REORDER", sortingType: items });
  },
  stopReordering() {
    importDefault(686).dispatch({ type: "GUILD_SETTINGS_MODAL_CHANNELS_STOP_REORDER" });
  },
  localChannelUpdate(found) {
    let obj = importDefault(686);
    obj = { type: "GUILD_SETTINGS_MODAL_LOCAL_SORT_CHANGE", updates: found };
    obj.dispatch(obj);
  }
};
