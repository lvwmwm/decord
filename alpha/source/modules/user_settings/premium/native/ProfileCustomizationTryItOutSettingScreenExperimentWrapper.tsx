// Module ID: 15629
// Function ID: 15630
// Name: ProfileCustomizationTryItOutSettingScreenExperimentWrapper
// Dependencies: [19, 21, 14375, 15630, 15633, 2]
// Exports: default

// Module 15629 (ProfileCustomizationTryItOutSettingScreenExperimentWrapper)
import UserProfilePremiumTryItOutMobileRefreshExperiment from "UserProfilePremiumTryItOutMobileRefreshExperiment" /* 14375 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/ProfileCustomizationTryItOutSettingScreenExperimentWrapper.tsx");

export default function ProfileCustomizationTryItOutSettingScreenExperimentWrapper() {
  return jsx(importDefault(UserProfilePremiumTryItOutMobileRefreshExperiment.useIsTryItOutMobileRefreshEnabled("ProfileCustomizationTryItOutSettingScreenExperimentWrapper") ? 15630 : 15633), {});
};
