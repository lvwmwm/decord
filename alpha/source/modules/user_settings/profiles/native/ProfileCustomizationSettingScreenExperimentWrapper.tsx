// Module ID: 15977
// Function ID: 15978
// Name: ProfileCustomizationSettingScreenExperimentWrapper
// Dependencies: [19, 21, 15978, 15979, 15996, 2]
// Exports: default

// Module 15977 (ProfileCustomizationSettingScreenExperimentWrapper)
import Fragment from "Fragment" /* 21 */;
import UserProfileMobileEditingRefreshExperiment from "UserProfileMobileEditingRefreshExperiment" /* 15978 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/ProfileCustomizationSettingScreenExperimentWrapper.tsx");

export default function ProfileCustomizationSettingScreenExperimentWrapper() {
  const obj = UserProfileMobileEditingRefreshExperiment;
  return jsx(importDefault(obj.useIsUserProfileEditingRefreshEnabled("ProfileCustomizationSettingScreenExperimentWrapper") ? 15979 : 15996), {});
};
