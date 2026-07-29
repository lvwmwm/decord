// Module ID: 11222
// Function ID: 11223
// Name: AppLauncherOnboardingBanner
// Dependencies: [19, 21, 1358, 11223, 11237, 11239, 2]
// Exports: default

// Module 11222 (AppLauncherOnboardingBanner)
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
    return jsx(importDefault(11223), { context: null });
  } else if (tmp(1358).DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER === visibleContent) {
    return jsx(importDefault(11237), {});
  } else if (tmp(1358).DismissibleContent.APP_LAUNCHER_ONBOARDING_BOTS_BANNER === visibleContent) {
    obj = { context: null };
    obj[0] = context;
    return jsx(importDefault(11239), { context: null });
  } else {
    return null;
  }
};
