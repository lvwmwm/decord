// Module ID: 10946
// Function ID: 10947
// Name: ChannelMuteUtils
// Dependencies: [2046, 2]
// Exports: getMuteSettings

// Module 10946 (ChannelMuteUtils)
import _modDef2046 from "module_2046" /* 2046 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelMuteUtils.tsx");

export const getMuteSettings = function getMuteSettings(selected_time_window) {
  let toISOStringResult;
  const mute_config = { selected_time_window, end_time: toISOStringResult };
  toISOStringResult = null;
  if (selected_time_window > 0) {
    const obj2 = _modDef2046();
    const addResult = obj2.add(selected_time_window, "second");
    toISOStringResult = addResult.toISOString();
  }
  return { muted: true, mute_config };
};
