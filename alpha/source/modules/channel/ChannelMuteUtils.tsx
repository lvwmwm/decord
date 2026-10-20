// Module ID: 10746
// Function ID: 10747
// Name: ChannelMuteUtils
// Dependencies: [2050, 2]
// Exports: getMuteSettings

// Module 10746 (ChannelMuteUtils)
import _modDef2050 from "module_2050" /* 2050 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelMuteUtils.tsx");

export const getMuteSettings = function getMuteSettings(selected_time_window) {
  let toISOStringResult;
  const mute_config = { selected_time_window, end_time: toISOStringResult };
  toISOStringResult = null;
  if (selected_time_window > 0) {
    const obj2 = _modDef2050();
    const addResult = obj2.add(selected_time_window, "second");
    toISOStringResult = addResult.toISOString();
  }
  return { muted: true, mute_config };
};
