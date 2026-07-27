// Module ID: 11160
// Function ID: 86749
// Name: AppLauncherOnboardingBanner
// Dependencies: [31, 33, 1334, 11161, 11175, 11177, 2]
// Exports: default

// Module 11160 (AppLauncherOnboardingBanner)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("DismissibleContent").fileFinishedImporting("modules/app_launcher/native/onboarding/banner/AppLauncherOnboardingBanner.tsx");

export default function AppLauncherOnboardingBanner(arg0) {
  let context;
  let visibleContent;
  ({ context, visibleContent } = arg0);
  if (require(1334) /* DismissibleContent */.DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER === visibleContent) {
    let obj = { context };
    return jsx(importDefault(11161), { context });
  } else if (require(1334) /* DismissibleContent */.DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER === visibleContent) {
    return jsx(importDefault(11175), {});
  } else if (require(1334) /* DismissibleContent */.DismissibleContent.APP_LAUNCHER_ONBOARDING_BOTS_BANNER === visibleContent) {
    obj = { context };
    return jsx(importDefault(11177), { context });
  } else {
    return null;
  }
};
