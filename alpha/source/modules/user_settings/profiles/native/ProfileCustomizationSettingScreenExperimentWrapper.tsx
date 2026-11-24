// Module ID: 15856
// Function ID: 15857
// Name: ProfileCustomizationSettingScreenExperimentWrapper
// Dependencies: [19, 21, 15857, 15858, 15875, 2]
// Exports: default

// Module 15856 (ProfileCustomizationSettingScreenExperimentWrapper)
import Fragment from "Fragment" /* 21 */;
import UserProfileMobileEditingRefreshExperiment from "UserProfileMobileEditingRefreshExperiment" /* 15857 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/ProfileCustomizationSettingScreenExperimentWrapper.tsx");

export default function ProfileCustomizationSettingScreenExperimentWrapper() {
  const obj = UserProfileMobileEditingRefreshExperiment;
  return jsx(importDefault(obj.useIsUserProfileEditingRefreshEnabled("ProfileCustomizationSettingScreenExperimentWrapper") ? 15858 : 15875), {});
};
