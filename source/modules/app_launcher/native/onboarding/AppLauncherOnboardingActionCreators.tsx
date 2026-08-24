// Module ID: 11327
// Function ID: 11328
// Name: setLastSeenTimeMs
// Dependencies: [709, 2]
// Exports: setLastSeenTimeMs, setTriggeredOnboardingContentMetadata

// Module 11327 (setLastSeenTimeMs)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = set.fileFinishedImporting("modules/app_launcher/native/onboarding/AppLauncherOnboardingActionCreators.tsx");

export const setLastSeenTimeMs = function setLastSeenTimeMs() {
  dispatcherDefault.dispatch({ type: "APP_LAUNCHER_ONBOARDING_SET_LAST_SEEN_TIME_MS" });
};
export const setTriggeredOnboardingContentMetadata = function setTriggeredOnboardingContentMetadata(triggeredOnboardingContentMetadata) {
  let obj = dispatcherDefault;
  obj = { type: "APP_LAUNCHER_ONBOARDING_SET_TRIGGERED_ONBOARDING_CONTENT_METADATA", triggeredOnboardingContentMetadata };
  obj.dispatch(obj);
};
