// Module ID: 685
// Function ID: 8469
// Name: setDeveloperOptionSettings
// Dependencies: [686, 2]
// Exports: setDeveloperOptionSettings, setRoutingKeyTags

// Module 685 (setDeveloperOptionSettings)
const result = require("set").fileFinishedImporting("actions/DeveloperOptionsActionCreators.tsx");

export const setDeveloperOptionSettings = function setDeveloperOptionSettings(settings) {
  let obj = importDefault(686);
  obj = { type: "DEVELOPER_OPTIONS_UPDATE_SETTINGS", settings };
  return obj.dispatch(obj);
};
export const setRoutingKeyTags = function setRoutingKeyTags(tags) {
  let obj = importDefault(686);
  obj = { type: "DEVELOPER_OPTIONS_SET_ROUTING_KEY", tags };
  return obj.dispatch(obj);
};
