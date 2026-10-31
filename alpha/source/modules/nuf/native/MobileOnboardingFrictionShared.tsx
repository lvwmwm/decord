// Module ID: 18037
// Function ID: 18038
// Name: MobileOnboardingFrictionShared
// Dependencies: [2]

// Module 18037 (MobileOnboardingFrictionShared)
import size from "module_2" /* 2 */;

const obj = { EXPLAINER: "explainer", OS_ONLY: "os_only", NONE: "none" };
const obj2 = { skipContactSync: false, skipAvatar: false, notificationPrompt: obj.EXPLAINER, deferATT: false };
const obj3 = { skipContactSync: true, skipAvatar: true };
const merged = Object.assign(obj2);
const result = size.fileFinishedImporting("modules/nuf/native/MobileOnboardingFrictionShared.tsx");

export const OnboardingNotificationPrompt = obj;
export const CONTROL = obj2;
export const LOW_FRICTION_V1 = obj3;
