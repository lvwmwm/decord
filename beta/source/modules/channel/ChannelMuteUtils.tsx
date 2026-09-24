// Module ID: 10411
// Function ID: 10412
// Name: ChannelMuteUtils
// Dependencies: [4384, 2]
// Exports: getMuteSettings

// Module 10411 (ChannelMuteUtils)
import _modDef4384 from "module_4384" /* 4384 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelMuteUtils.tsx");

export const getMuteSettings = function getMuteSettings(selected_time_window) {
  const mute_config = { selected_time_window, end_time: null };
  let toISOStringResult = null;
  if (selected_time_window > 0) {
    const obj2 = _modDef4384();
    toISOStringResult = _modDef4384().add(selected_time_window, "second").toISOString();
    const addResult = _modDef4384().add(selected_time_window, "second");
  }
  mute_config.end_time = toISOStringResult;
  return { muted: true, mute_config };
};
