// Module ID: 16028
// Function ID: 16029
// Name: ProfileCustomizationSettingScreenExperimentWrapper
// Dependencies: [19, 21, 16029, 16030, 16074, 2]
// Exports: default

// Module 16028 (ProfileCustomizationSettingScreenExperimentWrapper)
import Fragment from "Fragment" /* 21 */;
import UserProfileMobileEditingRefreshExperiment from "UserProfileMobileEditingRefreshExperiment" /* 16029 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/ProfileCustomizationSettingScreenExperimentWrapper.tsx");

export default function ProfileCustomizationSettingScreenExperimentWrapper() {
  const obj = UserProfileMobileEditingRefreshExperiment;
  return jsx(importDefault(obj.useIsUserProfileEditingRefreshEnabled("ProfileCustomizationSettingScreenExperimentWrapper") ? 16030 : 16074), {});
};
