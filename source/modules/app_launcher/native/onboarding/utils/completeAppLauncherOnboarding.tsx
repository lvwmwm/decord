// Module ID: 11493
// Function ID: 11494
// Name: completeAppLauncherOnboarding
// Dependencies: [4166, 1377, 2]
// Exports: default

// Module 11493 (completeAppLauncherOnboarding)
let result = require("set").fileFinishedImporting("modules/app_launcher/native/onboarding/utils/completeAppLauncherOnboarding.tsx");

export default function completeAppLauncherOnboarding(dismissAction) {
  let obj = require(4166) /* UNSAFE_isDismissibleContentDismissed */;
  obj = { dismissAction };
  const result = obj.UNSAFE_markDismissibleContentAsDismissed(require(1377) /* DismissibleContent */.DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER, obj);
  obj = { dismissAction };
  const result1 = require(4166) /* UNSAFE_isDismissibleContentDismissed */.UNSAFE_markDismissibleContentAsDismissed(require(1377) /* DismissibleContent */.DismissibleContent.APP_LAUNCHER_ONBOARDING_BOTS_BANNER, obj);
  const obj3 = require(4166) /* UNSAFE_isDismissibleContentDismissed */;
  const result2 = require(4166) /* UNSAFE_isDismissibleContentDismissed */.UNSAFE_markDismissibleContentAsDismissed(require(1377) /* DismissibleContent */.DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER, { dismissAction });
};
