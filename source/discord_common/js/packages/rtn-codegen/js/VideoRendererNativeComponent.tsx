// Module ID: 10575
// Function ID: 82540
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: []

// Module 10575 (__INTERNAL_VIEW_CONFIG)
let obj = { uiViewClassName: "DCDVideoRenderer", directEventTypes: { topSize: { registrationName: "onSize" }, topReady: { registrationName: "onReady" } } };
obj = { reverse: null, hanidec: null };
const _module = require(dependencyMap[0]);
const merged = Object.assign(_module.ConditionallyIgnoredEventHandlers({ "Bool(false)": null, "Bool(false)": null }));
obj.validAttributes = obj;
const _module1 = require(dependencyMap[1]);
const value = _module1.get("DCDVideoRenderer", () => obj);
const _module2 = require(dependencyMap[2]);
const result = _module2.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/VideoRendererNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
