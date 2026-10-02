// Module ID: 9574
// Function ID: 9575
// Name: ChannelMuteUtils
// Dependencies: [4424, 2]
// Exports: getMuteSettings

// Module 9574 (ChannelMuteUtils)
import _modDef4424 from "module_4424" /* 4424 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelMuteUtils.tsx");

export const getMuteSettings = function getMuteSettings(selected_time_window) {
  let toISOStringResult;
  const mute_config = { selected_time_window, end_time: toISOStringResult };
  toISOStringResult = null;
  if (selected_time_window > 0) {
    const obj2 = _modDef4424();
    const addResult = obj2.add(selected_time_window, "second");
    toISOStringResult = addResult.toISOString();
  }
  return { muted: true, mute_config };
};
