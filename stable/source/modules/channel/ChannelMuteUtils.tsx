// Module ID: 11072
// Function ID: 11073
// Name: ChannelMuteUtils
// Dependencies: [2042, 2]
// Exports: getMuteSettings

// Module 11072 (ChannelMuteUtils)
import _modDef2042 from "module_2042" /* 2042 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelMuteUtils.tsx");

export function getMuteSettings(selected_time_window) {
  let toISOStringResult;
  const mute_config = { selected_time_window, end_time: toISOStringResult };
  toISOStringResult = null;
  if (selected_time_window > 0) {
    const obj2 = _modDef2042();
    const addResult = obj2.add(selected_time_window, "second");
    toISOStringResult = addResult.toISOString();
  }
  return { muted: true, mute_config };
}
