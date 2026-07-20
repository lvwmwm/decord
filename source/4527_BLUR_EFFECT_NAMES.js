// Module ID: 4527
// Function ID: 39728
// Name: BLUR_EFFECT_NAMES
// Dependencies: []

// Module 4527 (BLUR_EFFECT_NAMES)
const _module = require(dependencyMap[0]);
const obj = { componentName: "DCDVisualEffectView" };
const tmp2 = _module.getSystemVersionMajor() >= 13;
obj.componentFoundInstance = importDefault(dependencyMap[2]);
const importDefaultResult = importDefault(dependencyMap[1]);
const _module1 = require(dependencyMap[3]);
const result = _module1.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewIOS.tsx");

export default importDefault(dependencyMap[1])(obj);
export const BLUR_EFFECT_NAMES = ["<string:1358954960>", "<string:658888351>", "<string:2231370055>", "<string:2868904588>", "<string:2634023670>", "isArray", "Date", "ao", "a", "isArray", "accessibilityRole", "accessible", "justifyContent"];
export const MODERN_IOS_BLURS_EFFECTS_AVAILABLE = tmp2;
