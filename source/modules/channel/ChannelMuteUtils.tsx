// Module ID: 10269
// Function ID: 79346
// Name: getMuteSettings
// Dependencies: []
// Exports: getMuteSettings

// Module 10269 (getMuteSettings)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/channel/ChannelMuteUtils.tsx");

export const getMuteSettings = function getMuteSettings(selected_time_window) {
  let obj = { muted: true };
  obj = { selected_time_window };
  let toISOStringResult = null;
  if (selected_time_window > 0) {
    const obj3 = importDefault(dependencyMap[0])();
    toISOStringResult = importDefault(dependencyMap[0])().add(selected_time_window, "second").toISOString();
    const addResult = importDefault(dependencyMap[0])().add(selected_time_window, "second");
  }
  obj.end_time = toISOStringResult;
  obj.mute_config = obj;
  return obj;
};
