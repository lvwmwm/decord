// Module ID: 11207
// Function ID: 87255
// Name: setLastSeenTimeMs
// Dependencies: [646840323, 899088385]
// Exports: setLastSeenTimeMs, setTriggeredOnboardingContentMetadata

// Module 11207 (setLastSeenTimeMs)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/app_launcher/native/onboarding/AppLauncherOnboardingActionCreators.tsx");

export const setLastSeenTimeMs = function setLastSeenTimeMs() {
  importDefault(dependencyMap[0]).dispatch({ type: "APP_LAUNCHER_ONBOARDING_SET_LAST_SEEN_TIME_MS" });
};
export const setTriggeredOnboardingContentMetadata = function setTriggeredOnboardingContentMetadata(triggeredOnboardingContentMetadata) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "APP_LAUNCHER_ONBOARDING_SET_TRIGGERED_ONBOARDING_CONTENT_METADATA", triggeredOnboardingContentMetadata };
  obj.dispatch(obj);
};
