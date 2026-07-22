// Module ID: 10576
// Function ID: 82564
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: []

// Module 10576 (__INTERNAL_VIEW_CONFIG)
let obj = { uiViewClassName: "DCDVideoRenderer", directEventTypes: { topSize: { registrationName: "onSize" }, topReady: { registrationName: "onReady" } } };
obj = { style: null, accessibilityRole: null };
const _module = require(dependencyMap[0]);
const merged = Object.assign(_module.ConditionallyIgnoredEventHandlers({ EXPRESSIVE_INTRO: null, maxVolume: null }));
obj.validAttributes = obj;
const _module1 = require(dependencyMap[1]);
const value = _module1.get("DCDVideoRenderer", () => obj);
const _module2 = require(dependencyMap[2]);
const result = _module2.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/VideoRendererNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
