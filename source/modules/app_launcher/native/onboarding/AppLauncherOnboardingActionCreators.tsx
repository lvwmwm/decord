// Module ID: 11485
// Function ID: 11486
// Name: setLastSeenTimeMs
// Dependencies: [709, 2]
// Exports: setLastSeenTimeMs, setTriggeredOnboardingContentMetadata

// Module 11485 (setLastSeenTimeMs)
const result = require("set").fileFinishedImporting("modules/app_launcher/native/onboarding/AppLauncherOnboardingActionCreators.tsx");

export const setLastSeenTimeMs = function setLastSeenTimeMs() {
  importDefault(709).dispatch({ type: "APP_LAUNCHER_ONBOARDING_SET_LAST_SEEN_TIME_MS" });
};
export const setTriggeredOnboardingContentMetadata = function setTriggeredOnboardingContentMetadata(triggeredOnboardingContentMetadata) {
  let obj = importDefault(709);
  obj = { type: "APP_LAUNCHER_ONBOARDING_SET_TRIGGERED_ONBOARDING_CONTENT_METADATA", triggeredOnboardingContentMetadata };
  obj.dispatch(obj);
};
