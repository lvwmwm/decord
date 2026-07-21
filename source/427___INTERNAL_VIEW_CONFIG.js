// Module ID: 427
// Function ID: 5953
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: []

// Module 427 (__INTERNAL_VIEW_CONFIG)
const obj = { uiViewClassName: "VirtualView", directEventTypes: { topModeChange: { registrationName: "onModeChange" } } };
const _module = require(dependencyMap[0]);
obj.validAttributes = Object.assign({ <string:2934526208>: null, <string:73746241>: null }, _module.ConditionallyIgnoredEventHandlers({ onModeChange: true }));
const _module1 = require(dependencyMap[1]);

export default _module1.get("VirtualView", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
