// Module ID: 11739
// Function ID: 11740
// Name: completeAppLauncherOnboarding
// Dependencies: [4898, 2048, 2]
// Exports: default

// Module 11739 (completeAppLauncherOnboarding)
import dismissible_content from "dismissible_content" /* 2048 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4898 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/utils/completeAppLauncherOnboarding.tsx");

export default function completeAppLauncherOnboarding(dismissAction) {
  const obj = DismissibleContentUnsafeUtils;
  const obj2 = { dismissAction };
  const result = obj.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER, obj2);
  const obj3 = DismissibleContentUnsafeUtils;
  const obj4 = { dismissAction };
  const result1 = obj3.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.APP_LAUNCHER_ONBOARDING_BOTS_BANNER, obj4);
  const obj5 = DismissibleContentUnsafeUtils;
  const obj6 = { dismissAction };
  const result2 = obj5.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER, obj6);
};
