// Module ID: 4537
// Function ID: 39828
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [42, 2]

// Module 4537 (__INTERNAL_VIEW_CONFIG)
import get from "get";

const obj = { uiViewClassName: "DCDVisualEffectView", validAttributes: { blurAmount: true, blurEffectName: true, blurTintIOSParityCompensationRgba: true, blurTintRgba: true, blurTargetViewNativeId: true } };
const value = get.get("DCDVisualEffectView", () => obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/VisualEffectViewNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
