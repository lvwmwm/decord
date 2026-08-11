// Module ID: 11438
// Function ID: 11439
// Name: AppLauncherOnboardingBanner
// Dependencies: [19, 21, 1377, 11439, 11453, 11455, 2]
// Exports: default

// Module 11438 (AppLauncherOnboardingBanner)
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
    return jsx(importDefault(11439), { context: null });
  } else if (tmp(1377).DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER === visibleContent) {
    return jsx(importDefault(11453), {});
  } else if (tmp(1377).DismissibleContent.APP_LAUNCHER_ONBOARDING_BOTS_BANNER === visibleContent) {
    obj = { context: null };
    obj[0] = context;
    return jsx(importDefault(11455), { context: null });
  } else {
    return null;
  }
};
