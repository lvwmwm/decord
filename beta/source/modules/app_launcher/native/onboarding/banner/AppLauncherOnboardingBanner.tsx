// Module ID: 12610
// Function ID: 12611
// Name: AppLauncherOnboardingBanner
// Dependencies: [19, 21, 5003, 12611, 12625, 12626, 2]
// Exports: default

// Module 12610 (AppLauncherOnboardingBanner)
import Fragment from "Fragment" /* 21 */;
import dismissible_content from "dismissible_content" /* 5003 */;
import ActivitiesBannerDefault from "ActivitiesBanner" /* 12611 */;
import AppsBannerDefault from "AppsBanner" /* 12625 */;
import BotsBannerDefault from "BotsBanner" /* 12626 */;
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
