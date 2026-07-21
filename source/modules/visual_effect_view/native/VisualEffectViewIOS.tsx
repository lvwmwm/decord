// Module ID: 4531
// Function ID: 39784
// Name: BLUR_EFFECT_NAMES
// Dependencies: []

// Module 4531 (BLUR_EFFECT_NAMES)
const _module = require(dependencyMap[0]);
const obj = { componentName: "DCDVisualEffectView" };
const tmp2 = _module.getSystemVersionMajor() >= 13;
obj.componentFoundInstance = importDefault(dependencyMap[2]);
const importDefaultResult = importDefault(dependencyMap[1]);
const _module1 = require(dependencyMap[3]);
const result = _module1.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewIOS.tsx");

export default importDefault(dependencyMap[1])(obj);
export const BLUR_EFFECT_NAMES = [];
export const MODERN_IOS_BLURS_EFFECTS_AVAILABLE = tmp2;
