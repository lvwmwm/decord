// Module ID: 1351
// Function ID: 1352
// Name: DeveloperOptionsActionCreators
// Dependencies: [577, 2]
// Exports: setDeveloperOptionSettings, setRoutingKeyTags

// Module 1351 (DeveloperOptionsActionCreators)
import DispatcherDefault from "Dispatcher" /* 577 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/DeveloperOptionsActionCreators.tsx");

export const setDeveloperOptionSettings = function setDeveloperOptionSettings(settings) {
  return DispatcherDefault.dispatch({ type: "DEVELOPER_OPTIONS_UPDATE_SETTINGS", settings });
};
export const setRoutingKeyTags = function setRoutingKeyTags(tags) {
  return DispatcherDefault.dispatch({ type: "DEVELOPER_OPTIONS_SET_ROUTING_KEY", tags });
};
