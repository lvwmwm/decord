// Module ID: 4531
// Function ID: 39792
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
export const BLUR_EFFECT_NAMES = ["GUILD_CAP_MODAL_UPSELL", "_bottom", "filledIconWrapper", "afk_channel_id", "rr_type", "M", "changeEventCalculator", "%encodeURI%", "hasPlayOnDesktopTask", "getChannelIcon", "REVERSE_TRIAL_EMOJI_BUTTON", "app", "a_20"];
export const MODERN_IOS_BLURS_EFFECTS_AVAILABLE = tmp2;
