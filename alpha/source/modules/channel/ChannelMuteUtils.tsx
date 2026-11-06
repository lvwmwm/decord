// Module ID: 11222
// Function ID: 11223
// Name: ChannelMuteUtils
// Dependencies: [2166, 2]
// Exports: getMuteSettings

// Module 11222 (ChannelMuteUtils)
import _modDef2166 from "module_2166" /* 2166 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelMuteUtils.tsx");

export function getMuteSettings(selected_time_window) {
  let toISOStringResult;
  const mute_config = { selected_time_window, end_time: toISOStringResult };
  toISOStringResult = null;
  if (selected_time_window > 0) {
    const obj2 = _modDef2166();
    const addResult = obj2.add(selected_time_window, "second");
    toISOStringResult = addResult.toISOString();
  }
  return { muted: true, mute_config };
}
