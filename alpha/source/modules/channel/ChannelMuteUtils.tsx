// Module ID: 10408
// Function ID: 10409
// Name: ChannelMuteUtils
// Dependencies: [4704, 2]
// Exports: getMuteSettings

// Module 10408 (ChannelMuteUtils)
import _modDef4704 from "module_4704" /* 4704 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelMuteUtils.tsx");

export const getMuteSettings = function getMuteSettings(selected_time_window) {
  let toISOStringResult;
  const mute_config = { selected_time_window, end_time: toISOStringResult };
  toISOStringResult = null;
  if (selected_time_window > 0) {
    const obj2 = _modDef4704();
    const addResult = obj2.add(selected_time_window, "second");
    toISOStringResult = addResult.toISOString();
  }
  return { muted: true, mute_config };
};
