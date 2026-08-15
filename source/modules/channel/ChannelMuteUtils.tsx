// Module ID: 10085
// Function ID: 10086
// Name: getMuteSettings
// Dependencies: [3975, 2]
// Exports: getMuteSettings

// Module 10085 (getMuteSettings)
const result = require("set").fileFinishedImporting("modules/channel/ChannelMuteUtils.tsx");

export const getMuteSettings = function getMuteSettings(selected_time_window) {
  const mute_config = { selected_time_window, end_time: null };
  let toISOStringResult = null;
  if (selected_time_window > 0) {
    const obj2 = importDefault(3975)();
    toISOStringResult = importDefault(3975)().add(selected_time_window, "second").toISOString();
    const addResult = importDefault(3975)().add(selected_time_window, "second");
  }
  mute_config[1] = toISOStringResult;
  return { muted: true, mute_config };
};
