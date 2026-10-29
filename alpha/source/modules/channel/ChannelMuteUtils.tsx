// Module ID: 11016
// Function ID: 11017
// Name: ChannelMuteUtils
// Dependencies: [2047, 2]
// Exports: getMuteSettings

// Module 11016 (ChannelMuteUtils)
import _modDef2047 from "module_2047" /* 2047 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelMuteUtils.tsx");

export function getMuteSettings(selected_time_window) {
  let toISOStringResult;
  const mute_config = { selected_time_window, end_time: toISOStringResult };
  toISOStringResult = null;
  if (selected_time_window > 0) {
    const obj2 = _modDef2047();
    const addResult = obj2.add(selected_time_window, "second");
    toISOStringResult = addResult.toISOString();
  }
  return { muted: true, mute_config };
}
