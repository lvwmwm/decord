// Module ID: 11248
// Function ID: 87587
// Name: setLastSeenTimeMs
// Dependencies: [686, 2]
// Exports: setLastSeenTimeMs, setTriggeredOnboardingContentMetadata

// Module 11248 (setLastSeenTimeMs)
const result = require("set").fileFinishedImporting("modules/app_launcher/native/onboarding/AppLauncherOnboardingActionCreators.tsx");

export const setLastSeenTimeMs = function setLastSeenTimeMs() {
  importDefault(686).dispatch({ type: "APP_LAUNCHER_ONBOARDING_SET_LAST_SEEN_TIME_MS" });
};
export const setTriggeredOnboardingContentMetadata = function setTriggeredOnboardingContentMetadata(triggeredOnboardingContentMetadata) {
  let obj = importDefault(686);
  obj = { type: "APP_LAUNCHER_ONBOARDING_SET_TRIGGERED_ONBOARDING_CONTENT_METADATA", triggeredOnboardingContentMetadata };
  obj.dispatch(obj);
};
