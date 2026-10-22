// Module ID: 11097
// Function ID: 11098
// Name: ProfileCustomizationNavigationStore
// Dependencies: [5149, 1097, 2]

// Module 11097 (ProfileCustomizationNavigationStore)
import UserSettingsConstants from "UserSettingsConstants" /* 1097 */;
import ZustandStore from "ZustandStore" /* 5149 */;
import size from "module_2" /* 2 */;

const createZustandStore = ZustandStore.createZustandStore;
const constants = UserSettingsConstants.ProfileCustomizationSubsection;
const zustandStore = createZustandStore(() => ({ subsection: constants.USER_PROFILE, scrollPosition: null, pendingCustomizeBadgesSheet: false }));
const result = size.fileFinishedImporting("modules/profile_customization/ProfileCustomizationNavigationStore.tsx");

export default zustandStore;
