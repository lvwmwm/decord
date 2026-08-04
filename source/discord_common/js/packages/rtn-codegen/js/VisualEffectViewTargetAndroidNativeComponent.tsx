// Module ID: 15748
// Function ID: 15749
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [65, 2]

// Module 15748 (__INTERNAL_VIEW_CONFIG)
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const obj = { uiViewClassName: "DCDVisualEffectViewTarget", validAttributes: {} };
const value = setRuntimeConfigProvider.get("DCDVisualEffectViewTarget", () => obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/VisualEffectViewTargetAndroidNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
