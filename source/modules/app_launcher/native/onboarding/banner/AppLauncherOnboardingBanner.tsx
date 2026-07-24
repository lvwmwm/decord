// Module ID: 11198
// Function ID: 87099
// Name: AppLauncherOnboardingBanner
// Dependencies: [31, 33, 1334, 11199, 11213, 11215, 2]
// Exports: default

// Module 11198 (AppLauncherOnboardingBanner)
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
    return jsx(importDefault(11199), { context });
  } else if (require(1334) /* DismissibleContent */.DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER === visibleContent) {
    return jsx(importDefault(11213), {});
  } else if (require(1334) /* DismissibleContent */.DismissibleContent.APP_LAUNCHER_ONBOARDING_BOTS_BANNER === visibleContent) {
    obj = { context };
    return jsx(importDefault(11215), { context });
  } else {
    return null;
  }
};
