// Module ID: 1359
// Function ID: 1360
// Name: DeveloperOptionsActionCreators
// Dependencies: [585, 2]
// Exports: setDeveloperOptionSettings, setRoutingKeyTags

// Module 1359 (DeveloperOptionsActionCreators)
import DispatcherDefault from "Dispatcher" /* 585 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/DeveloperOptionsActionCreators.tsx");

export const setDeveloperOptionSettings = function setDeveloperOptionSettings(settings) {
  const obj = DispatcherDefault;
  const obj2 = { type: "DEVELOPER_OPTIONS_UPDATE_SETTINGS", settings };
  return obj.dispatch(obj2);
};
export const setRoutingKeyTags = function setRoutingKeyTags(tags) {
  const obj = DispatcherDefault;
  const obj2 = { type: "DEVELOPER_OPTIONS_SET_ROUTING_KEY", tags };
  return obj.dispatch(obj2);
};
