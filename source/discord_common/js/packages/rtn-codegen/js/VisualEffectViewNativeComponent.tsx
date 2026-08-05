// Module ID: 4659
// Function ID: 4660
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [65, 2]

// Module 4659 (__INTERNAL_VIEW_CONFIG)
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const obj = { uiViewClassName: "DCDVisualEffectView", validAttributes: { blurAmount: true, blurEffectName: true, blurTintIOSParityCompensationRgba: true, blurTintRgba: true, blurTargetViewNativeId: true } };
const value = setRuntimeConfigProvider.get("DCDVisualEffectView", () => obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/VisualEffectViewNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
