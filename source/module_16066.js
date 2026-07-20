// Module ID: 16066
// Function ID: 123532
// Dependencies: []

// Module 16066
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/guild_settings/GuildSettingsModalChannelsActionCreators.tsx");

export default {
  terminate() {
    importDefault(dependencyMap[0]).dispatch({ type: "GUILD_SETTINGS_MODAL_CHANNELS_TERMINATE" });
  },
  startReordering(arg0) {
    const items = [...arguments];
    importDefault(dependencyMap[0]).dispatch({ type: "GUILD_SETTINGS_MODAL_CHANNELS_START_REORDER", sortingType: items });
  },
  stopReordering() {
    importDefault(dependencyMap[0]).dispatch({ type: "GUILD_SETTINGS_MODAL_CHANNELS_STOP_REORDER" });
  },
  localChannelUpdate(found) {
    let obj = importDefault(dependencyMap[0]);
    obj = { type: "GUILD_SETTINGS_MODAL_LOCAL_SORT_CHANGE", updates: found };
    obj.dispatch(obj);
  }
};
