// Module ID: 4570
// Function ID: 39951
// Name: BLUR_EFFECT_NAMES
// Dependencies: [4145, 4571, 4572, 2]

// Module 4570 (BLUR_EFFECT_NAMES)
import getSystemVersion from "getSystemVersion";
import importDefaultResult from "map";

const obj = { componentName: "DCDVisualEffectView" };
const tmp2 = getSystemVersion.getSystemVersionMajor() >= 13;
obj.componentFoundInstance = require("__INTERNAL_VIEW_CONFIG");
const importDefaultResultResult = require("map")(obj);
const result = require("__INTERNAL_VIEW_CONFIG").fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewIOS.tsx");

export default importDefaultResultResult;
export const BLUR_EFFECT_NAMES = ["UIBlurEffectStyleLight", "UIBlurEffectStyleExtraLight", "UIBlurEffectStyleDark", "UIBlurEffectStyleSystemUltraThinMaterialLight", "UIBlurEffectStyleSystemUltraThinMaterialDark", "UIBlurEffectStyleSystemThinMaterialLight", "UIBlurEffectStyleSystemThinMaterialDark", "UIBlurEffectStyleSystemMaterialLight", "UIBlurEffectStyleSystemMaterialDark", "UIBlurEffectStyleSystemThickMaterialLight", "UIBlurEffectStyleSystemThickMaterialDark", "UIBlurEffectStyleSystemChromeMaterialLight", "UIBlurEffectStyleSystemChromeMaterialDark"];
export const MODERN_IOS_BLURS_EFFECTS_AVAILABLE = tmp2;
