// Module ID: 12330
// Function ID: 12331
// Name: AppLauncherOnboardingBanner
// Dependencies: [19, 21, 2027, 12331, 12345, 12347, 2]
// Exports: default

// Module 12330 (AppLauncherOnboardingBanner)
import dismissible_content from "dismissible_content" /* 2027 */;
import ActivitiesBannerDefault from "ActivitiesBanner" /* 12331 */;
import AppsBannerDefault from "AppsBanner" /* 12345 */;
import BotsBannerDefault from "BotsBanner" /* 12347 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/banner/AppLauncherOnboardingBanner.tsx");

export default function AppLauncherOnboardingBanner(arg0) {
  ({ context, visibleContent } = arg0);
  if (dismissible_content.DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER === visibleContent) {
    const obj2 = { context };
    return jsx(ActivitiesBannerDefault, { context });
  } else if (tmp(2027).DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER === visibleContent) {
    return jsx(AppsBannerDefault, {});
  } else if (tmp(2027).DismissibleContent.APP_LAUNCHER_ONBOARDING_BOTS_BANNER === visibleContent) {
    const obj = { context };
    return jsx(BotsBannerDefault, { context });
  } else {
    return null;
  }
};
