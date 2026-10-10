// Module ID: 10397
// Function ID: 10398
// Name: ChannelMuteUtils
// Dependencies: [4702, 2]
// Exports: getMuteSettings

// Module 10397 (ChannelMuteUtils)
import _modDef4702 from "module_4702" /* 4702 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelMuteUtils.tsx");

export const getMuteSettings = function getMuteSettings(selected_time_window) {
  let toISOStringResult;
  const mute_config = { selected_time_window, end_time: toISOStringResult };
  toISOStringResult = null;
  if (selected_time_window > 0) {
    const obj2 = _modDef4702();
    const addResult = obj2.add(selected_time_window, "second");
    toISOStringResult = addResult.toISOString();
  }
  return { muted: true, mute_config };
};
