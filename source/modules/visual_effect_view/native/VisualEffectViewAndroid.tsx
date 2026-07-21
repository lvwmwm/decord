// Module ID: 4534
// Function ID: 39781
// Name: MODERN_ANDROID_BLURRING_AVAILABLE
// Dependencies: []

// Module 4534 (MODERN_ANDROID_BLURRING_AVAILABLE)
const _module = require(dependencyMap[0]);
const obj = { componentName: "DCDVisualEffectView" };
const tmp2 = _module.getSystemVersionMajor() >= 31;
obj.componentFoundInstance = importDefault(dependencyMap[2]);
const importDefaultResult = importDefault(dependencyMap[1]);
const _module1 = require(dependencyMap[3]);
const result = _module1.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default importDefault(dependencyMap[1])(obj);
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
