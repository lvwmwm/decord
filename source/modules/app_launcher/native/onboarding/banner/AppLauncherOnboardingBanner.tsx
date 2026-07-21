// Module ID: 11157
// Function ID: 86767
// Name: AppLauncherOnboardingBanner
// Dependencies: []
// Exports: default

// Module 11157 (AppLauncherOnboardingBanner)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/app_launcher/native/onboarding/banner/AppLauncherOnboardingBanner.tsx");

export default function AppLauncherOnboardingBanner(arg0) {
  let context;
  let visibleContent;
  ({ context, visibleContent } = arg0);
  if (arg1(dependencyMap[2]).DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER === visibleContent) {
    let obj = { context };
    return jsx(importDefault(dependencyMap[3]), obj);
  } else if (arg1(dependencyMap[2]).DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER === visibleContent) {
    return jsx(importDefault(dependencyMap[4]), {});
  } else if (arg1(dependencyMap[2]).DismissibleContent.APP_LAUNCHER_ONBOARDING_BOTS_BANNER === visibleContent) {
    obj = { context };
    return jsx(importDefault(dependencyMap[5]), obj);
  } else {
    return null;
  }
};
