// Module ID: 10034
// Function ID: 10035
// Name: ProfileCustomizationNavigationStore
// Dependencies: [4661, 1088, 2]

// Module 10034 (ProfileCustomizationNavigationStore)
import UserSettingsConstants from "UserSettingsConstants" /* 1088 */;
import ZustandStore from "ZustandStore" /* 4661 */;
import size from "module_2" /* 2 */;

const constants = UserSettingsConstants.ProfileCustomizationSubsection;
const zustandStore = ZustandStore.createZustandStore(() => ({ subsection: constants.USER_PROFILE, scrollPosition: null }));
const result = size.fileFinishedImporting("modules/profile_customization/ProfileCustomizationNavigationStore.tsx");

export default zustandStore;
