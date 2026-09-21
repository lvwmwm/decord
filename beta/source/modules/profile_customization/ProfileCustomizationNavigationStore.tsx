// Module ID: 10035
// Function ID: 10036
// Name: ProfileCustomizationNavigationStore
// Dependencies: [4626, 1084, 2]

// Module 10035 (ProfileCustomizationNavigationStore)
import UserSettingsConstants from "UserSettingsConstants" /* 1084 */;
import ZustandStore from "ZustandStore" /* 4626 */;
import size from "module_2" /* 2 */;

const constants = UserSettingsConstants.ProfileCustomizationSubsection;
const zustandStore = ZustandStore.createZustandStore(() => ({ subsection: constants.USER_PROFILE, scrollPosition: null }));
const result = size.fileFinishedImporting("modules/profile_customization/ProfileCustomizationNavigationStore.tsx");

export default zustandStore;
