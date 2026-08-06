// Module ID: 15768
// Function ID: 15769
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [65, 2]

// Module 15768 (__INTERNAL_VIEW_CONFIG)
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const obj = { uiViewClassName: "DCDVisualEffectViewTarget", validAttributes: {} };
const value = setRuntimeConfigProvider.get("DCDVisualEffectViewTarget", () => obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/VisualEffectViewTargetAndroidNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
