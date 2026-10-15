// Module ID: 10631
// Function ID: 10632
// Name: ChannelMuteUtils
// Dependencies: [4758, 2]
// Exports: getMuteSettings

// Module 10631 (ChannelMuteUtils)
import _modDef4758 from "module_4758" /* 4758 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelMuteUtils.tsx");

export const getMuteSettings = function getMuteSettings(selected_time_window) {
  let toISOStringResult;
  const mute_config = { selected_time_window, end_time: toISOStringResult };
  toISOStringResult = null;
  if (selected_time_window > 0) {
    const obj2 = _modDef4758();
    const addResult = obj2.add(selected_time_window, "second");
    toISOStringResult = addResult.toISOString();
  }
  return { muted: true, mute_config };
};
