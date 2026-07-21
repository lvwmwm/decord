// Module ID: 11155
// Function ID: 86751
// Name: completeAppLauncherOnboarding
// Dependencies: []
// Exports: default

// Module 11155 (completeAppLauncherOnboarding)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/app_launcher/native/onboarding/utils/completeAppLauncherOnboarding.tsx");

export default function completeAppLauncherOnboarding(dismissAction) {
  let obj = require(dependencyMap[0]);
  obj = { dismissAction };
  const result = obj.UNSAFE_markDismissibleContentAsDismissed(require(dependencyMap[1]).DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER, obj);
  obj = { dismissAction };
  const result1 = require(dependencyMap[0]).UNSAFE_markDismissibleContentAsDismissed(require(dependencyMap[1]).DismissibleContent.APP_LAUNCHER_ONBOARDING_BOTS_BANNER, obj);
  const obj3 = require(dependencyMap[0]);
  const result2 = require(dependencyMap[0]).UNSAFE_markDismissibleContentAsDismissed(require(dependencyMap[1]).DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER, { dismissAction });
};
