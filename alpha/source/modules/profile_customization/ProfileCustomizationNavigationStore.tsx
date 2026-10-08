// Module ID: 9095
// Function ID: 9096
// Name: ProfileCustomizationNavigationStore
// Dependencies: [4949, 1095, 2]

// Module 9095 (ProfileCustomizationNavigationStore)
import UserSettingsConstants from "UserSettingsConstants" /* 1095 */;
import ZustandStore from "ZustandStore" /* 4949 */;
import size from "module_2" /* 2 */;

const createZustandStore = ZustandStore.createZustandStore;
const constants = UserSettingsConstants.ProfileCustomizationSubsection;
const zustandStore = createZustandStore(() => ({ subsection: constants.USER_PROFILE, scrollPosition: null, pendingCustomizeBadgesSheet: false }));
const result = size.fileFinishedImporting("modules/profile_customization/ProfileCustomizationNavigationStore.tsx");

export default zustandStore;
