// Module ID: 11648
// Function ID: 11649
// Name: ProfileCustomizationNavigationStore
// Dependencies: [5335, 1082, 2]

// Module 11648 (ProfileCustomizationNavigationStore)
import UserSettingsConstants from "UserSettingsConstants" /* 1082 */;
import ZustandStore from "ZustandStore" /* 5335 */;
import size from "module_2" /* 2 */;

const createZustandStore = ZustandStore.createZustandStore;
const constants = UserSettingsConstants.ProfileCustomizationSubsection;
const zustandStore = createZustandStore(() => ({ subsection: constants.USER_PROFILE, scrollPosition: null, pendingCustomizeBadgesSheet: false }));
const result = size.fileFinishedImporting("modules/profile_customization/ProfileCustomizationNavigationStore.tsx");

export default zustandStore;
