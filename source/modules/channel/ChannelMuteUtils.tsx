// Module ID: 10286
// Function ID: 79421
// Name: getMuteSettings
// Dependencies: [3747, 2]
// Exports: getMuteSettings

// Module 10286 (getMuteSettings)
const result = require("set").fileFinishedImporting("modules/channel/ChannelMuteUtils.tsx");

export const getMuteSettings = function getMuteSettings(selected_time_window) {
  let obj = { muted: true };
  obj = { selected_time_window };
  let toISOStringResult = null;
  if (selected_time_window > 0) {
    const obj3 = importDefault(3747)();
    toISOStringResult = importDefault(3747)().add(selected_time_window, "second").toISOString();
    const addResult = importDefault(3747)().add(selected_time_window, "second");
  }
  obj.end_time = toISOStringResult;
  obj.mute_config = obj;
  return obj;
};
