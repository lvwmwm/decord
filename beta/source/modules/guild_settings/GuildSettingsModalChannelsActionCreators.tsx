// Module ID: 15776
// Function ID: 15777
// Name: GuildSettingsModalChannelsActionCreators
// Dependencies: [573, 2]

// Module 15776 (GuildSettingsModalChannelsActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

let obj = {
  terminate() {
    const obj = DispatcherDefault;
    obj.dispatch({ type: "GUILD_SETTINGS_MODAL_CHANNELS_TERMINATE" });
  },
  startReordering() {
    const items = [...arguments];
    const obj = DispatcherDefault;
    obj.dispatch({ type: "GUILD_SETTINGS_MODAL_CHANNELS_START_REORDER", sortingType: items });
  },
  stopReordering() {
    const obj = DispatcherDefault;
    obj.dispatch({ type: "GUILD_SETTINGS_MODAL_CHANNELS_STOP_REORDER" });
  },
  localChannelUpdate(found) {
    const obj = DispatcherDefault;
    const obj2 = { type: "GUILD_SETTINGS_MODAL_LOCAL_SORT_CHANGE", updates: found };
    obj.dispatch(obj2);
  }
};
const result = size.fileFinishedImporting("modules/guild_settings/GuildSettingsModalChannelsActionCreators.tsx");

export default obj;
