// Module ID: 12906
// Function ID: 98455
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: []

// Module 12906 (__INTERNAL_VIEW_CONFIG)
let obj = { uiViewClassName: "AccessibilityFocusView", directEventTypes: { topAccessibilityFocus: { registrationName: "onAccessibilityFocus" }, topAccessibilityBlur: { registrationName: "onAccessibilityBlur" } } };
obj = {};
const _module = require(dependencyMap[0]);
const merged = Object.assign(_module.ConditionallyIgnoredEventHandlers({ paddingVertical: null, containerStyle: null }));
obj.validAttributes = obj;
const _module1 = require(dependencyMap[1]);
const value = _module1.get("AccessibilityFocusView", () => obj);
const _module2 = require(dependencyMap[2]);
const result = _module2.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/AccessibilityFocusNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
