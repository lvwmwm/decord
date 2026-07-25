// Module ID: 10245
// Function ID: 79287
// Name: getMuteSettings
// Dependencies: [3713, 2]
// Exports: getMuteSettings

// Module 10245 (getMuteSettings)
const result = require("set").fileFinishedImporting("modules/channel/ChannelMuteUtils.tsx");

export const getMuteSettings = function getMuteSettings(selected_time_window) {
  let obj = { muted: true };
  obj = { selected_time_window };
  let toISOStringResult = null;
  if (selected_time_window > 0) {
    const obj3 = importDefault(3713)();
    toISOStringResult = importDefault(3713)().add(selected_time_window, "second").toISOString();
    const addResult = importDefault(3713)().add(selected_time_window, "second");
  }
  obj.end_time = toISOStringResult;
  obj.mute_config = obj;
  return obj;
};
