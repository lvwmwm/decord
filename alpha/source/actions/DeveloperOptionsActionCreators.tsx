// Module ID: 1358
// Function ID: 1359
// Name: DeveloperOptionsActionCreators
// Dependencies: [572, 2]
// Exports: setDeveloperOptionSettings, setRoutingKeyTags

// Module 1358 (DeveloperOptionsActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/DeveloperOptionsActionCreators.tsx");

export function setDeveloperOptionSettings(settings) {
  const obj = DispatcherDefault;
  const obj2 = { type: "DEVELOPER_OPTIONS_UPDATE_SETTINGS", settings };
  return obj.dispatch(obj2);
}
export function setRoutingKeyTags(tags) {
  const obj = DispatcherDefault;
  const obj2 = { type: "DEVELOPER_OPTIONS_SET_ROUTING_KEY", tags };
  return obj.dispatch(obj2);
}
