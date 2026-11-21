// Module ID: 10363
// Function ID: 10364
// Name: ChannelMuteUtils
// Dependencies: [2168, 2]
// Exports: getMuteSettings

// Module 10363 (ChannelMuteUtils)
import _modDef2168 from "module_2168" /* 2168 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelMuteUtils.tsx");

export function getMuteSettings(selected_time_window) {
  let toISOStringResult;
  const mute_config = { selected_time_window, end_time: toISOStringResult };
  toISOStringResult = null;
  if (selected_time_window > 0) {
    const obj2 = _modDef2168();
    const addResult = obj2.add(selected_time_window, "second");
    toISOStringResult = addResult.toISOString();
  }
  return { muted: true, mute_config };
}
