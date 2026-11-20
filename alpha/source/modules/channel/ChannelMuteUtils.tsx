// Module ID: 10243
// Function ID: 10244
// Name: ChannelMuteUtils
// Dependencies: [2167, 2]
// Exports: getMuteSettings

// Module 10243 (ChannelMuteUtils)
import _modDef2167 from "module_2167" /* 2167 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelMuteUtils.tsx");

export function getMuteSettings(selected_time_window) {
  let toISOStringResult;
  const mute_config = { selected_time_window, end_time: toISOStringResult };
  toISOStringResult = null;
  if (selected_time_window > 0) {
    const obj2 = _modDef2167();
    const addResult = obj2.add(selected_time_window, "second");
    toISOStringResult = addResult.toISOString();
  }
  return { muted: true, mute_config };
}
