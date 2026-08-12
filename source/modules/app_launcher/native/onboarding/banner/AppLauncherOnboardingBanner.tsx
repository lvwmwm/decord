// Module ID: 11495
// Function ID: 11496
// Name: AppLauncherOnboardingBanner
// Dependencies: [19, 21, 1377, 11496, 11510, 11512, 2]
// Exports: default

// Module 11495 (AppLauncherOnboardingBanner)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("DismissibleContent").fileFinishedImporting("modules/app_launcher/native/onboarding/banner/AppLauncherOnboardingBanner.tsx");

export default function AppLauncherOnboardingBanner(arg0) {
  let context;
  let visibleContent;
  ({ context, visibleContent } = arg0);
  if (require(1377) /* DismissibleContent */.DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER === visibleContent) {
    let obj = { context: null };
    obj[0] = context;
    return jsx(importDefault(11496), { context: null });
  } else if (tmp(1377).DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER === visibleContent) {
    return jsx(importDefault(11510), {});
  } else if (tmp(1377).DismissibleContent.APP_LAUNCHER_ONBOARDING_BOTS_BANNER === visibleContent) {
    obj = { context: null };
    obj[0] = context;
    return jsx(importDefault(11512), { context: null });
  } else {
    return null;
  }
};
