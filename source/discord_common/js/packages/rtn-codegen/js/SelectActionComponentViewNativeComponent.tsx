// Module ID: 14559
// Function ID: 109711
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: []

// Module 14559 (__INTERNAL_VIEW_CONFIG)
let obj = { uiViewClassName: "SelectActionComponentView", directEventTypes: { topTap: { registrationName: "onTap" } } };
obj = { model: true };
const _module = require(dependencyMap[0]);
const merged = Object.assign(_module.ConditionallyIgnoredEventHandlers({ onTap: true }));
obj.validAttributes = obj;
const _module1 = require(dependencyMap[1]);
const value = _module1.get("SelectActionComponentView", () => obj);
const _module2 = require(dependencyMap[2]);
const result = _module2.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/SelectActionComponentViewNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
