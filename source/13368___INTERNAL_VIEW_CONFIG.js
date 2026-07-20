// Module ID: 13368
// Function ID: 101662
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: []

// Module 13368 (__INTERNAL_VIEW_CONFIG)
let obj = { uiViewClassName: "KeyCommandsView", directEventTypes: { topKeyCommand: { registrationName: "onKeyCommand" } } };
obj = { keyCommands: true };
const _module = require(dependencyMap[0]);
const merged = Object.assign(_module.ConditionallyIgnoredEventHandlers({ onKeyCommand: true }));
obj.validAttributes = obj;
const _module1 = require(dependencyMap[1]);
const value = _module1.get("KeyCommandsView", () => obj);
const _module2 = require(dependencyMap[2]);
const result = _module2.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/KeyCommandsNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
