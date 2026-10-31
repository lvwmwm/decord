// Module ID: 12288
// Function ID: 12289
// Name: AppLauncherOnboardingActionCreators
// Dependencies: [572, 2]
// Exports: setLastSeenTimeMs, setTriggeredOnboardingContentMetadata

// Module 12288 (AppLauncherOnboardingActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/AppLauncherOnboardingActionCreators.tsx");

export function setLastSeenTimeMs() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "APP_LAUNCHER_ONBOARDING_SET_LAST_SEEN_TIME_MS" });
}
export function setTriggeredOnboardingContentMetadata(triggeredOnboardingContentMetadata) {
  const obj = DispatcherDefault;
  const obj2 = { type: "APP_LAUNCHER_ONBOARDING_SET_TRIGGERED_ONBOARDING_CONTENT_METADATA", triggeredOnboardingContentMetadata };
  obj.dispatch(obj2);
}
