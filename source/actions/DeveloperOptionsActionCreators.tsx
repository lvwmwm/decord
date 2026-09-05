// Module ID: 1348
// Function ID: 1349
// Name: setDeveloperOptionSettings
// Dependencies: [573, 2]
// Exports: setDeveloperOptionSettings, setRoutingKeyTags

// Module 1348 (setDeveloperOptionSettings)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 573 */;

const result = set.fileFinishedImporting("actions/DeveloperOptionsActionCreators.tsx");

export const setDeveloperOptionSettings = function setDeveloperOptionSettings(settings) {
  let obj = dispatcherDefault;
  obj = { type: "DEVELOPER_OPTIONS_UPDATE_SETTINGS", settings };
  return obj.dispatch(obj);
};
export const setRoutingKeyTags = function setRoutingKeyTags(tags) {
  let obj = dispatcherDefault;
  obj = { type: "DEVELOPER_OPTIONS_SET_ROUTING_KEY", tags };
  return obj.dispatch(obj);
};
