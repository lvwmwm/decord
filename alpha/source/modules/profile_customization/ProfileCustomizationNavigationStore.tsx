// Module ID: 9305
// Function ID: 9306
// Name: ProfileCustomizationNavigationStore
// Dependencies: [4983, 1081, 2]

// Module 9305 (ProfileCustomizationNavigationStore)
import UserSettingsConstants from "UserSettingsConstants" /* 1081 */;
import ZustandStore from "ZustandStore" /* 4983 */;
import size from "module_2" /* 2 */;

const createZustandStore = ZustandStore.createZustandStore;
const constants = UserSettingsConstants.ProfileCustomizationSubsection;
const zustandStore = createZustandStore(() => ({ subsection: constants.USER_PROFILE, scrollPosition: null, pendingCustomizeBadgesSheet: false, editingTab: "main" }));
const result = size.fileFinishedImporting("modules/profile_customization/ProfileCustomizationNavigationStore.tsx");

export default zustandStore;
