// Module ID: 12212
// Function ID: 12213
// Name: completeAppLauncherOnboarding
// Dependencies: [4611, 2031, 2]
// Exports: default

// Module 12212 (completeAppLauncherOnboarding)
import dismissible_content from "dismissible_content" /* 2031 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4611 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/utils/completeAppLauncherOnboarding.tsx");

export default function completeAppLauncherOnboarding(dismissAction) {
  const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER, { dismissAction });
  const obj2 = { dismissAction };
  const result1 = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.APP_LAUNCHER_ONBOARDING_BOTS_BANNER, { dismissAction });
  const obj4 = { dismissAction };
  const result2 = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER, { dismissAction });
};
