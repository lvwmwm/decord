// Module ID: 11368
// Function ID: 11369
// Name: AppLauncherOnboardingBanner
// Dependencies: [19, 21, 1358, 11369, 11383, 11385, 2]
// Exports: default

// Module 11368 (AppLauncherOnboardingBanner)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("DismissibleContent").fileFinishedImporting("modules/app_launcher/native/onboarding/banner/AppLauncherOnboardingBanner.tsx");

export default function AppLauncherOnboardingBanner(arg0) {
  let context;
  let visibleContent;
  ({ context, visibleContent } = arg0);
  if (require(1358) /* DismissibleContent */.DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER === visibleContent) {
    let obj = { context: null };
    obj[0] = context;
    return jsx(importDefault(11369), { context: null });
  } else if (tmp(1358).DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER === visibleContent) {
    return jsx(importDefault(11383), {});
  } else if (tmp(1358).DismissibleContent.APP_LAUNCHER_ONBOARDING_BOTS_BANNER === visibleContent) {
    obj = { context: null };
    obj[0] = context;
    return jsx(importDefault(11385), { context: null });
  } else {
    return null;
  }
};
