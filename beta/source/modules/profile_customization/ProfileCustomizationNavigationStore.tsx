// Module ID: 10002
// Function ID: 10003
// Name: ProfileCustomizationNavigationStore
// Dependencies: [4629, 1088, 2]

// Module 10002 (ProfileCustomizationNavigationStore)
import UserSettingsConstants from "UserSettingsConstants" /* 1088 */;
import ZustandStore from "ZustandStore" /* 4629 */;
import size from "module_2" /* 2 */;

const constants = UserSettingsConstants.ProfileCustomizationSubsection;
const zustandStore = ZustandStore.createZustandStore(() => ({ subsection: constants.USER_PROFILE, scrollPosition: null }));
const result = size.fileFinishedImporting("modules/profile_customization/ProfileCustomizationNavigationStore.tsx");

export default zustandStore;
