// Module ID: 11259
// Function ID: 11260
// Name: ChannelMuteUtils
// Dependencies: [2171, 2]
// Exports: getMuteSettings

// Module 11259 (ChannelMuteUtils)
import _modDef2171 from "module_2171" /* 2171 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelMuteUtils.tsx");

export function getMuteSettings(selected_time_window) {
  let toISOStringResult;
  const mute_config = { selected_time_window, end_time: toISOStringResult };
  toISOStringResult = null;
  if (selected_time_window > 0) {
    const obj2 = _modDef2171();
    const addResult = obj2.add(selected_time_window, "second");
    toISOStringResult = addResult.toISOString();
  }
  return { muted: true, mute_config };
}
