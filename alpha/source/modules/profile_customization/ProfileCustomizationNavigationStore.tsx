// Module ID: 9425
// Function ID: 9426
// Name: ProfileCustomizationNavigationStore
// Dependencies: [5102, 1081, 2]

// Module 9425 (ProfileCustomizationNavigationStore)
import UserSettingsConstants from "UserSettingsConstants" /* 1081 */;
import ZustandStore from "ZustandStore" /* 5102 */;
import size from "module_2" /* 2 */;

const createZustandStore = ZustandStore.createZustandStore;
const constants = UserSettingsConstants.ProfileCustomizationSubsection;
const zustandStore = createZustandStore(() => ({ subsection: constants.USER_PROFILE, scrollPosition: null, pendingCustomizeBadgesSheet: false, editingTab: "main" }));
const result = size.fileFinishedImporting("modules/profile_customization/ProfileCustomizationNavigationStore.tsx");

export default zustandStore;
