// Module ID: 13380
// Function ID: 13381
// Name: AppLauncherOnboardingBanner
// Dependencies: [19, 21, 5139, 13381, 13395, 13396, 2]
// Exports: default

// Module 13380 (AppLauncherOnboardingBanner)
import Fragment from "Fragment" /* 21 */;
import dismissible_content from "dismissible_content" /* 5139 */;
import ActivitiesBannerDefault from "ActivitiesBanner" /* 13381 */;
import AppsBannerDefault from "AppsBanner" /* 13395 */;
import BotsBannerDefault from "BotsBanner" /* 13396 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/banner/AppLauncherOnboardingBanner.tsx");

export default function AppLauncherOnboardingBanner(arg0) {
  let context;
  let visibleContent;
  ({ context, visibleContent } = arg0);
  if (dismissible_content.DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER === visibleContent) {
    return jsx(ActivitiesBannerDefault, { context });
  } else if (dismissible_content.DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER === visibleContent) {
    return jsx(AppsBannerDefault, {});
  } else if (dismissible_content.DismissibleContent.APP_LAUNCHER_ONBOARDING_BOTS_BANNER === visibleContent) {
    return jsx(BotsBannerDefault, { context });
  } else {
    return null;
  }
};
