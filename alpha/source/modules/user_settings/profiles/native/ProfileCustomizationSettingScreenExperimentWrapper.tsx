// Module ID: 16035
// Function ID: 16036
// Name: ProfileCustomizationSettingScreenExperimentWrapper
// Dependencies: [19, 21, 16036, 16037, 16081, 2]
// Exports: default

// Module 16035 (ProfileCustomizationSettingScreenExperimentWrapper)
import Fragment from "Fragment" /* 21 */;
import UserProfileMobileEditingRefreshExperiment from "UserProfileMobileEditingRefreshExperiment" /* 16036 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/ProfileCustomizationSettingScreenExperimentWrapper.tsx");

export default function ProfileCustomizationSettingScreenExperimentWrapper() {
  const obj = UserProfileMobileEditingRefreshExperiment;
  return jsx(importDefault(obj.useIsUserProfileEditingRefreshEnabled("ProfileCustomizationSettingScreenExperimentWrapper") ? 16037 : 16081), {});
};
