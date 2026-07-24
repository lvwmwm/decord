// Module ID: 5281
// Function ID: 45595
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [38, 42]

// Module 5281 (__INTERNAL_VIEW_CONFIG)
import get from "get";

let obj = { uiViewClassName: "RNGestureHandlerButton" };
obj = { exclusive: true, foreground: true, borderless: true, enabled: true, rippleColor: null, rippleRadius: true, touchSoundDisabled: true, borderWidth: true, borderColor: null, borderStyle: true };
obj = { process: require("processColor").default };
obj.rippleColor = obj;
obj.borderColor = { process: require("processColor").default };
obj.validAttributes = obj;

export default get.get("RNGestureHandlerButton", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
