// Module ID: 13081
// Function ID: 100989
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [110, 42, 2]

// Module 13081 (__INTERNAL_VIEW_CONFIG)
import weakSet from "weakSet";
import get from "get";

let obj = { uiViewClassName: "AccessibilityFocusView", directEventTypes: { topAccessibilityFocus: { registrationName: "onAccessibilityFocus" }, topAccessibilityBlur: { registrationName: "onAccessibilityBlur" } } };
obj = {};
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onAccessibilityFocus: true, onAccessibilityBlur: true }));
obj.validAttributes = obj;
const value = get.get("AccessibilityFocusView", () => obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/AccessibilityFocusNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
