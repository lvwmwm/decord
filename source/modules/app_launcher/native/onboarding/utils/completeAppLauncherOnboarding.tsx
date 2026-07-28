// Module ID: 11196
// Function ID: 86864
// Name: completeAppLauncherOnboarding
// Dependencies: [3981, 1334, 2]
// Exports: default

// Module 11196 (completeAppLauncherOnboarding)
let result = require("set").fileFinishedImporting("modules/app_launcher/native/onboarding/utils/completeAppLauncherOnboarding.tsx");

export default function completeAppLauncherOnboarding(dismissAction) {
  let obj = require(3981) /* UNSAFE_isDismissibleContentDismissed */;
  obj = { dismissAction };
  const result = obj.UNSAFE_markDismissibleContentAsDismissed(require(1334) /* DismissibleContent */.DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER, obj);
  obj = { dismissAction };
  const result1 = require(3981) /* UNSAFE_isDismissibleContentDismissed */.UNSAFE_markDismissibleContentAsDismissed(require(1334) /* DismissibleContent */.DismissibleContent.APP_LAUNCHER_ONBOARDING_BOTS_BANNER, obj);
  const obj3 = require(3981) /* UNSAFE_isDismissibleContentDismissed */;
  const result2 = require(3981) /* UNSAFE_isDismissibleContentDismissed */.UNSAFE_markDismissibleContentAsDismissed(require(1334) /* DismissibleContent */.DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER, { dismissAction });
};
