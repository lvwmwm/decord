// Module ID: 10372
// Function ID: 10373
// Name: ChannelMuteUtils
// Dependencies: [4352, 2]
// Exports: getMuteSettings

// Module 10372 (ChannelMuteUtils)
import _modDef4352 from "module_4352" /* 4352 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelMuteUtils.tsx");

export const getMuteSettings = function getMuteSettings(selected_time_window) {
  const mute_config = { selected_time_window, end_time: null };
  let toISOStringResult = null;
  if (selected_time_window > 0) {
    const obj2 = _modDef4352();
    toISOStringResult = _modDef4352().add(selected_time_window, "second").toISOString();
    const addResult = _modDef4352().add(selected_time_window, "second");
  }
  mute_config.end_time = toISOStringResult;
  return { muted: true, mute_config };
};
