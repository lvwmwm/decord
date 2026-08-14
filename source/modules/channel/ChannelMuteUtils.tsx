// Module ID: 9881
// Function ID: 9882
// Name: getMuteSettings
// Dependencies: [3943, 2]
// Exports: getMuteSettings

// Module 9881 (getMuteSettings)
const result = require("set").fileFinishedImporting("modules/channel/ChannelMuteUtils.tsx");

export const getMuteSettings = function getMuteSettings(selected_time_window) {
  const mute_config = { selected_time_window, end_time: null };
  let toISOStringResult = null;
  if (selected_time_window > 0) {
    const obj2 = importDefault(3943)();
    toISOStringResult = importDefault(3943)().add(selected_time_window, "second").toISOString();
    const addResult = importDefault(3943)().add(selected_time_window, "second");
  }
  mute_config[1] = toISOStringResult;
  return { muted: true, mute_config };
};
