// Module ID: 10012
// Function ID: 77387
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: []

// Module 10012 (__INTERNAL_VIEW_CONFIG)
let obj = { uiViewClassName: "DCDTTIMeasurementView", directEventTypes: { topMeasurement: { registrationName: "onMeasurement" } } };
obj = {};
const _module = require(dependencyMap[0]);
const merged = Object.assign(_module.ConditionallyIgnoredEventHandlers({ onMeasurement: true }));
obj.validAttributes = obj;
const _module1 = require(dependencyMap[1]);
const value = _module1.get("DCDTTIMeasurementView", () => obj);
const _module2 = require(dependencyMap[2]);
const result = _module2.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/TTIMeasurementNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
