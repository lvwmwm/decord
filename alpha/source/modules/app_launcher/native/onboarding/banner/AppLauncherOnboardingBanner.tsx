// Module ID: 11741
// Function ID: 11742
// Name: AppLauncherOnboardingBanner
// Dependencies: [19, 21, 2029, 11742, 11756, 11758, 2]
// Exports: default

// Module 11741 (AppLauncherOnboardingBanner)
import dismissible_content from "dismissible_content" /* 2029 */;
import ActivitiesBannerDefault from "ActivitiesBanner" /* 11742 */;
import AppsBannerDefault from "AppsBanner" /* 11756 */;
import BotsBannerDefault from "BotsBanner" /* 11758 */;
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
  } else if (tmp(2029).DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER === visibleContent) {
    return jsx(AppsBannerDefault, {});
  } else if (tmp(2029).DismissibleContent.APP_LAUNCHER_ONBOARDING_BOTS_BANNER === visibleContent) {
    const obj = { context };
    return jsx(BotsBannerDefault, { context });
  } else {
    return null;
  }
};
