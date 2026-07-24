// Module ID: 5086
// Function ID: 44286
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [110, 42, 2]

// Module 5086 (__INTERNAL_VIEW_CONFIG)
import weakSet from "weakSet";
import get from "get";

let obj = { uiViewClassName: "DCDFastImageView", directEventTypes: { topLoadStart: { registrationName: "onLoadStart" }, topProgress: { registrationName: "onProgress" }, topError: { registrationName: "onError" }, topLoad: { registrationName: "onLoad" }, topLoadEnd: { registrationName: "onLoadEnd" } } };
obj = { source: true, resizeMode: true, placeholder: true, enableAnimation: true, paused: true, manualPlayback: true, fade: true, usesSmallCache: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onLoadStart: true, onProgress: true, onError: true, onLoad: true, onLoadEnd: true }));
obj.validAttributes = obj;
const value = get.get("DCDFastImageView", () => obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/FastImageNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
