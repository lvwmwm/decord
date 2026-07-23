// Module ID: 11168
// Function ID: 86830
// Name: AppLauncherOnboardingBanner
// Dependencies: [31, 33, 1334, 11169, 11183, 11185, 2]
// Exports: default

// Module 11168 (AppLauncherOnboardingBanner)
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
    return jsx(importDefault(11169), { context });
  } else if (require(1334) /* DismissibleContent */.DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER === visibleContent) {
    return jsx(importDefault(11183), {});
  } else if (require(1334) /* DismissibleContent */.DismissibleContent.APP_LAUNCHER_ONBOARDING_BOTS_BANNER === visibleContent) {
    obj = { context };
    return jsx(importDefault(11185), { context });
  } else {
    return null;
  }
};
