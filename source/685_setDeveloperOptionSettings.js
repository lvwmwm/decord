// Module ID: 685
// Function ID: 8464
// Name: setDeveloperOptionSettings
// Dependencies: []
// Exports: setDeveloperOptionSettings, setRoutingKeyTags

// Module 685 (setDeveloperOptionSettings)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("actions/DeveloperOptionsActionCreators.tsx");

export const setDeveloperOptionSettings = function setDeveloperOptionSettings(settings) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "DEVELOPER_OPTIONS_UPDATE_SETTINGS", settings };
  return obj.dispatch(obj);
};
export const setRoutingKeyTags = function setRoutingKeyTags(tags) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "DEVELOPER_OPTIONS_SET_ROUTING_KEY", tags };
  return obj.dispatch(obj);
};
