// Module ID: 11159
// Function ID: 86744
// Name: AppLauncherOnboardingBanner
// Dependencies: [31, 33, 1334, 11160, 11174, 11176, 2]
// Exports: default

// Module 11159 (AppLauncherOnboardingBanner)
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
    return jsx(importDefault(11160), { context });
  } else if (require(1334) /* DismissibleContent */.DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER === visibleContent) {
    return jsx(importDefault(11174), {});
  } else if (require(1334) /* DismissibleContent */.DismissibleContent.APP_LAUNCHER_ONBOARDING_BOTS_BANNER === visibleContent) {
    obj = { context };
    return jsx(importDefault(11176), { context });
  } else {
    return null;
  }
};
