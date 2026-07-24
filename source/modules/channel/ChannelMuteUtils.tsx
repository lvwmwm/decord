// Module ID: 10312
// Function ID: 79634
// Name: getMuteSettings
// Dependencies: [3712, 2]
// Exports: getMuteSettings

// Module 10312 (getMuteSettings)
const result = require("set").fileFinishedImporting("modules/channel/ChannelMuteUtils.tsx");

export const getMuteSettings = function getMuteSettings(selected_time_window) {
  let obj = { muted: true };
  obj = { selected_time_window };
  let toISOStringResult = null;
  if (selected_time_window > 0) {
    const obj3 = importDefault(3712)();
    toISOStringResult = importDefault(3712)().add(selected_time_window, "second").toISOString();
    const addResult = importDefault(3712)().add(selected_time_window, "second");
  }
  obj.end_time = toISOStringResult;
  obj.mute_config = obj;
  return obj;
};
