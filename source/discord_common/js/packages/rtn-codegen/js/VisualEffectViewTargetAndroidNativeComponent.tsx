// Module ID: 15534
// Function ID: 119532
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [42, 2]

// Module 15534 (__INTERNAL_VIEW_CONFIG)
import get from "get";

const obj = { uiViewClassName: "DCDVisualEffectViewTarget", validAttributes: {} };
const value = get.get("DCDVisualEffectViewTarget", () => obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/VisualEffectViewTargetAndroidNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
