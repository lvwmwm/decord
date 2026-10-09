// Module ID: 5366
// Function ID: 5367
// Name: VisualEffectViewIOS
// Dependencies: [5067, 5367, 5368, 2]

// Module 5366 (VisualEffectViewIOS)
import VisualEffectViewNativeComponentDefault from "VisualEffectViewNativeComponent" /* 5368 */;
import DeviceUtils from "DeviceUtils" /* 5067 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5367 */;
import size from "module_2" /* 2 */;

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: VisualEffectViewNativeComponentDefault };
const tmp2 = DeviceUtils.getSystemVersionMajor() >= 13;
const importDefaultResultResult = requireNativeComponentOrDefault(obj);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewIOS.tsx");

export default importDefaultResultResult;
export const BLUR_EFFECT_NAMES = ["UIBlurEffectStyleLight", "UIBlurEffectStyleExtraLight", "UIBlurEffectStyleDark", "UIBlurEffectStyleSystemUltraThinMaterialLight", "UIBlurEffectStyleSystemUltraThinMaterialDark", "UIBlurEffectStyleSystemThinMaterialLight", "UIBlurEffectStyleSystemThinMaterialDark", "UIBlurEffectStyleSystemMaterialLight", "UIBlurEffectStyleSystemMaterialDark", "UIBlurEffectStyleSystemThickMaterialLight", "UIBlurEffectStyleSystemThickMaterialDark", "UIBlurEffectStyleSystemChromeMaterialLight", "UIBlurEffectStyleSystemChromeMaterialDark"];
export const MODERN_IOS_BLURS_EFFECTS_AVAILABLE = tmp2;
