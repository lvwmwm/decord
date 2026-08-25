// Module ID: 16147
// Function ID: 16148
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [65, 2]

// Module 16147 (__INTERNAL_VIEW_CONFIG)
import set from "set" /* 2 */;
import setRuntimeConfigProvider from "setRuntimeConfigProvider" /* 65 */;

const obj = { uiViewClassName: "DCDVisualEffectViewTarget", validAttributes: {} };
const value = setRuntimeConfigProvider.get("DCDVisualEffectViewTarget", () => obj);
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/VisualEffectViewTargetAndroidNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
