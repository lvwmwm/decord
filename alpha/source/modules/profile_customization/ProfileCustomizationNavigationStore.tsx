// Module ID: 10041
// Function ID: 10042
// Name: ProfileCustomizationNavigationStore
// Dependencies: [4627, 1084, 2]

// Module 10041 (ProfileCustomizationNavigationStore)
import UserSettingsConstants from "UserSettingsConstants" /* 1084 */;
import ZustandStore from "ZustandStore" /* 4627 */;
import size from "module_2" /* 2 */;

const constants = UserSettingsConstants.ProfileCustomizationSubsection;
const zustandStore = ZustandStore.createZustandStore(() => ({ subsection: constants.USER_PROFILE, scrollPosition: null }));
const result = size.fileFinishedImporting("modules/profile_customization/ProfileCustomizationNavigationStore.tsx");

export default zustandStore;
