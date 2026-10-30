// Module ID: 11422
// Function ID: 11423
// Name: ProfileCustomizationNavigationStore
// Dependencies: [5206, 1082, 2]

// Module 11422 (ProfileCustomizationNavigationStore)
import UserSettingsConstants from "UserSettingsConstants" /* 1082 */;
import ZustandStore from "ZustandStore" /* 5206 */;
import size from "module_2" /* 2 */;

const createZustandStore = ZustandStore.createZustandStore;
const constants = UserSettingsConstants.ProfileCustomizationSubsection;
const zustandStore = createZustandStore(() => ({ subsection: constants.USER_PROFILE, scrollPosition: null, pendingCustomizeBadgesSheet: false }));
const result = size.fileFinishedImporting("modules/profile_customization/ProfileCustomizationNavigationStore.tsx");

export default zustandStore;
