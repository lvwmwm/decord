// Module ID: 9305
// Function ID: 9306
// Name: ProfileCustomizationNavigationStore
// Dependencies: [4981, 1082, 2]

// Module 9305 (ProfileCustomizationNavigationStore)
import UserSettingsConstants from "UserSettingsConstants" /* 1082 */;
import ZustandStore from "ZustandStore" /* 4981 */;
import size from "module_2" /* 2 */;

const createZustandStore = ZustandStore.createZustandStore;
const constants = UserSettingsConstants.ProfileCustomizationSubsection;
const zustandStore = createZustandStore(() => ({ subsection: constants.USER_PROFILE, scrollPosition: null, pendingCustomizeBadgesSheet: false, editingTab: "main" }));
const result = size.fileFinishedImporting("modules/profile_customization/ProfileCustomizationNavigationStore.tsx");

export default zustandStore;
